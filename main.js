let container = document.querySelector('.profileInfo')
let img = document.querySelector('#profileImage')

// Ajax request
let request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/R-Dark')
request.addEventListener("load", myFunction)
request.send()

function myFunction() {
  let data = JSON.parse(this.responseText)
  console.log(data.name);

  let li = document.createElement("li")
  li.innerHTML = data.name
  container.appendChild(li);

  let li2 = document.createElement("li")
  li2.innerHTML = data.html_url
  container.appendChild(li2);

  let li3 = document.createElement("li")
  li3.innerHTML = data.email
  container.appendChild(li3);

  let li4 = document.createElement("li")
  li4.innerHTML = data.company
  container.appendChild(li4);

  let li5 = document.createElement("li")
  li5.innerHTML = data.blog
  container.appendChild(li5);

  let li6 = document.createElement("img")
  img.src = data.avatar_url
  img.appendChild(li6);


}
