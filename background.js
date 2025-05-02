const config = {
  provider: 'openai', // or "azure"
  apiKey: 'YOUR_API_KEY_HERE',
  endpoint: '', // required for Azure
  model: 'gpt-3.5-turbo',
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'generateTitle') {
    ;(async () => {
      const messages = message.data

      const payload = {
        messages: [
          {
            role: 'system',
            content:
              'You are an assistant that generates clear, descriptive pull request titles based on commit messages.',
          },
          {
            role: 'user',
            content: `Generate a concise and descriptive pull request title based on the following commit messages:\n\n${messages.join(
              '\n',
            )}`,
          },
        ],
        temperature: 0.7,
      }

      try {
        let url = ''
        let headers = {
          'Content-Type': 'application/json',
        }

        if (config.provider === 'openai') {
          url = 'https://api.openai.com/v1/chat/completions'
          headers['Authorization'] = `Bearer ${config.apiKey}`
          payload.model = config.model
        } else if (config.provider === 'azure') {
          url = `${config.endpoint}/openai/deployments/${config.model}/chat/completions?api-version=2023-07-01-preview`
          headers['api-key'] = config.apiKey
        }

        const response = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload),
        })

        const result = await response.json()

        let title = 'Untitled PR'
        if (result.choices?.[0]?.message?.content) {
          title = result.choices[0].message.content.trim()
        }

        sendResponse({ title })
      } catch (err) {
        console.error('AI API error:', err)
        sendResponse({ title: null })
      }
    })()

    return true // Indicates async response
  }
})
