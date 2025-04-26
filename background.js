const url = ''
const api_key = ''
const model = ''

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'generateTitle') {
    ;(async () => {
      const messages = message.data

      try {
        const payload = {
          messages: [
            {
              role: 'system',
              content:
                'You are an assistant that generates clear, descriptive, and professional pull request titles. Titles should summarize the changes based on the commit messages.',
            },
            {
              role: 'user',
              content: `Generate a concise and meaningful pull request title using the following commit messages:\n\n${messages.join(
                '\n',
              )}`,
            },
          ],
        }

        console.log(
          '[AI PR Extension] Sending request to Azure with messages:',
          messages,
        )

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'api-key': api_key,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        const result = await response.json()
        console.log('[AI PR Extension] Azure API response:', result)

        const title = result?.choices[0]?.message?.content

        sendResponse({ title })
      } catch (error) {
        console.error('Azure API error:', error)
        sendResponse({ title: null })
      }
    })()
    return true // Indicates async response
  }
})
