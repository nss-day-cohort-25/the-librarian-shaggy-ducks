let storyArray = []

const storyRef = document.querySelector("#storyRef")

function printStory(){

	for (let i = 0; i < storyArray.length; i++) {
		if (!storyArray[i].isArray()) {
			const storySection = document.createElement("section")
			storySection.classList.add("storySection")
			storySection.textContent = `${storyArray[i]}`
			storyRef.appendChild(storySection)
		} else {
			const storySection = document.createElement("section")
			storySection.classList.add("storySection genre")
			const storyUl = document.createElement("ul")
			storySection.textContent = `${storyArray[i][0]}`
			for (let j = 1; j < storyArray[i].length; j++) {
				const storyLi = document.createElement("li")
				storyLi.textContent = `${storyArray[i][j]}`
				storyUl.appendChild(storyLi)
			}
			storySection.appendChild(storyUl)
			storyRef.appendChild(storySection)
		}
	}
}