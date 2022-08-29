import React, { useEffect } from "react"
import "../css/Filter.css"
import FilterTabs from "../mixins/FilterTabs"
import tabsToggle from "../hooks/tabsToggle"
import FilterContent from "../mixins/FilterContent"
import { useSelector } from "react-redux"

const Filter = () => {

	const { tabFilters } = useSelector(state => state.category)
  
	useEffect(() => {
		if(tabFilters.length > 0) {
			const filter_tab = document.querySelectorAll('.filter_tab')
			const filter_con = document.querySelectorAll('.filter_con')
			// filter_tab[0].classList.add('filter_tab_active')
			// filter_con[0].classList.add('filter_con_active')
			tabsToggle(filter_tab, filter_con, 'filter_tab_active', 'filter_con_active')		
		}
	}, [tabFilters])
  
  return (
    <div className="filter_container">
			<div className="filter_category">
				<FilterTabs />
			</div>
      <div className="filter_tabs" >
				<ul className="filter_tab_nav">
					{
						tabFilters.map((item, index) => {
							return (
								<li key={item} id={`filter_tab_${index}`} className="filter_tab">{item}</li>
							)
						})
					}
				</ul>
				<div className="filter_tab_content">
					{
						tabFilters.map((item, index) => {
							return (
								<div key={item} id={`filter_con${index}`} className="filter_con">
									<FilterContent type={item} />
								</div>
							)
						})
					}
				</div>
			</div>
    </div>
  )
}

export default React.memo(Filter)