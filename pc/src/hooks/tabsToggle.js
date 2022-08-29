const tabsToggle = (eleList, eleList__, activeClass, activeClass__) => {
	eleList.forEach(element => {
		
		element.addEventListener('click', () => {
			
			// 모두 클래스 삭제
			eleList.forEach(item => {
				item.classList.remove(activeClass)
			})
			
			// 클릭한 element 클래스 추가
			element.classList.add(activeClass)
			
			if(eleList__) {
				// 추가 클래스 삭제
				eleList__.forEach(item => {
					item.classList.remove(activeClass__)
				})
				
				if(eleList__[element.id.split('_')[2]]) {
					// 클래스 추가
					eleList__[element.id.split('_')[2]].classList.add(activeClass__)
				}
				
				else if(element.id) {
					// 클래스 추가
					eleList__.forEach(item => {
						if(item.id === element.id) {
							item.classList.add(activeClass__)
						}
					})
				}
			}
		})
		
	})
}

export default tabsToggle