function insertGenerateButton() {
  const titleInput = document.querySelector('#pull_request_title')
  const titleHeader = document.querySelector('#pull_request_title_header')

  if (
    !titleInput ||
    !titleHeader ||
    document.querySelector('#ai-generate-title-btn')
  )
    return

  const button = document.createElement('button')
  button.id = 'ai-generate-title-btn'
  button.type = 'button'
  button.textContent = '✨ Generate Title'
  button.style.marginLeft = '10px'
  button.style.padding = '4px 8px'
  button.style.border = '1px solid #d0d7de'
  button.style.borderRadius = '6px'
  button.style.cursor = 'pointer'
  button.style.fontSize = '12px'

  const loadingText = document.createElement('span')
  loadingText.id = 'ai-loading-text'
  loadingText.textContent = ' ⏳'
  loadingText.style.display = 'none'

  button.appendChild(loadingText)

  button.onclick = async (event) => {
    event.preventDefault()
    event.stopPropagation()

    loadingText.style.display = 'inline'
    const commitMessages = Array.from(
      document.querySelectorAll('.js-navigation-open'),
    ).map((el) => el.textContent.trim())

    chrome.runtime.sendMessage(
      { type: 'generateTitle', data: commitMessages },
      (response) => {
        loadingText.style.display = 'none'
        console.log(response)
        if (response && response.title) {
          titleInput.value = response.title
        } else {
          alert('AI failed to generate title. Please try again.')
        }
      },
    )
  }

  titleHeader.appendChild(button)
}

// Observe DOM changes to handle SPA navigation on GitHub
const observer = new MutationObserver(() => {
  insertGenerateButton()
})

observer.observe(document.body, { childList: true, subtree: true })

// Initial try
insertGenerateButton()
