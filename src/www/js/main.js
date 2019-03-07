window.onload = () => {
  let urlScheme = document.getElementById('urlScheme');
  let hostName = document.getElementById('hostName');
  let userName = document.getElementById('userName');
  let repositoryName = document.getElementById('repositoryName');
  let branchName = document.getElementById('branchName');
  let filePath = document.getElementById('filePath');
  let viewSource = document.getElementById('viewSource');

  viewSource.onclick = () => {
    highlightCode('codeArea', urlScheme.value, hostName.value, userName.value, repositoryName.value, branchName.value, filePath.value);
  }
}

function highlightCode(elementId, urlScheme, hostName, userName, repositoryName, branchName, filePath) {
  let requestUrl = `${urlScheme}://${hostName}/${userName}/${repositoryName}/${branchName}/${filePath}`;
  let codeArea = document.getElementById(elementId);
  $.get(requestUrl, data => {
    codeArea.textContent = data;

    // コードをハイライトする
    hljs.highlightBlock(codeArea);
  })
  .fail(jqXHR => {
    alert(`[${jqXHR.status}] ${requestUrl}`);
  });
}
