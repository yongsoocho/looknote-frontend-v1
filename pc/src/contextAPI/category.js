import { createContext, useState } from "react"
import category from "../json/category"
import detail from "../json/detail"

export const CategoryContext = createContext({
	category: category,
	detail: detail,
	filter: {
		state: {
			filters: [],
			tabFilters: []
		},
		action: {
			setFilterAction() {
			},
			clearFilterAction() {
			},
			deleteFilterAction() {
			}
		}
	}
})

export const CategoryProvider = ({children}) => {
	
	const [filters, setFilters] = useState([])
	const [tabFilters, setTabFilters] = useState(["제품군을 선택해 주세요"])
	
	const setTabFiltersAction = payload => {
		return setTabFilters(tabFilters => ([...payload]))
	}
	const setFilterAction = payload => {
		const newTabFilters = detail.filter(item => item.type === payload)
		setTabFiltersAction(newTabFilters[0].detail)
		return setFilters(filters => ([ ...filters, payload ]))
	}
	const deleteFilterAction = payload => {
		let result = [...filters]
		payload.forEach(item => {
			result = result.filter(element => item !== element)
		})
		return setFilters(filters => ([...result]))
	}
	const setCategory3FilterAction = payload => {
		return setFilters(filters => ([...filters, payload]))
	}
	
	const value = {
		category: category,
		detail: detail,
		filter: {
			state: {
				filters,
				tabFilters
			},
			action: {
				setFilterAction,
				deleteFilterAction,
				setCategory3FilterAction
			}
		}
	}
	
	return (
		<CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
	)
}

export const { Consumer: CategoryConsumer } = CategoryContext