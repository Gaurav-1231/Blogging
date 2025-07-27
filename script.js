function submitComment(event, sectionId) {
  event.preventDefault();
  
  const form = event.target;
  const name = form.querySelector('input').value.trim();
  const comment = form.querySelector('textarea').value.trim();
  const commentList = document.getElementById(sectionId);
  

  if (name && comment) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
    commentList.appendChild(commentDiv);
    form.reset();
  }
}
