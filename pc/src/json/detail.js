import { outer, top, pants, onepiece, accessory } from "./details"

const detail = [
	{
		level: 1,
		type: "아우터",
		detail: outer
	},
	{
		level: 2,
		type: "자켓/점퍼",
		detail: outer
	},
	{
		level: 2,
		type: "코트/트렌치",
		detail: outer
	},
	{
		level: 2,
		type: "패딩류",
		detail: outer
	},
	{
		level: 3,
		type: "블레이저",
		detail: outer
	},
	{
		level: 3,
		type: "트위드 자켓",
		detail: outer
	},
	{
		level: 3,
		type: "데님 자켓",
		detail: outer
	},
	{
		level: 3,
		type: "레더 자켓",
		detail: outer
	},
	{
		level: 3,
		type: "후드 집업",
		detail: outer
	},
	{
		level: 3,
		type: "바람막이",
		detail: outer
	},
	{
		level: 3,
		type: "야상",
		detail: outer
	},
	{
		level: 3,
		type: "후리스",
		detail: outer
	},
	{
		level: 3,
		type: "퍼",
		detail: outer
	},
	{
		level: 3,
		type: "무스탕",
		detail: outer
	},
	{
		level: 3,
		type: "아우터 기타",
		detail: outer
	},
	{
		level: 3,
		type: "코트",
		detail: outer
	},
	{
		level: 3,
		type: "트렌치 코트",
		detail: outer
	},
	{
		level: 3,
		type: "패딩",
		detail: outer
	},
	{
		level: 3,
		type: "경량 패딩",
		detail: outer
	},
	{
		level: 3,
		type: "조끼 패딩",
		detail: outer
	},
	{
		level: 1,
		type: "상의",
		detail: top
	},
	{
		level: 2,
		type: "맨투맨/후드티",
		detail: top
	},
	{
		level: 2,
		type: "셔츠/블라우스",
		detail: top
	},
	{
		level: 2,
		type: "티셔츠",
		detail: top
	},
	{
		level: 3,
		type: "니트",
		detail: top
	},
	{
		level: 3,
		type: "맨투맨",
		detail: top
	},
	{
		level: 3,
		type: "후드티",
		detail: top
	},
	{
		level: 3,
		type: "블라우스",
		detail: top
	},
	{
		level: 3,
		type: "셔츠",
		detail: top
	},
	{
		level: 3,
		type: "니트 풀오버",
		detail: top
	},
	{
		level: 3,
		type: "가디건",
		detail: top
	},
	{
		level: 3,
		type: "터틀넥",
		detail: top
	},
	{
		level: 3,
		type: "니트베스트/뷔스티에",
		detail: top
	},
	{
		level: 1,
		type: "하의",
		detail: pants
	},
	{
		level: 2,
		type: "팬츠",
		detail: pants
	},
	{
		level: 2,
		type: "레깅스",
		detail: pants
	},
	{
		level: 3,
		type: "스커트",
		detail: pants
	},
	{
		level: 3,
		type: "스키니",
		detail: pants
	},
	{
		level: 3,
		type: "스트레이트",
		detail: pants
	},
	{
		level: 3,
		type: "부츠컷",
		detail: pants
	},
	{
		level: 3,
		type: "와이드",
		detail: pants
	},
	{
		level: 3,
		type: "조거",
		detail: pants
	},
	{
		level: 3,
		type: "팬츠 기타",
		detail: pants
	},
	{
		level: 3,
		type: "미니sk",
		detail: pants
	},
	{
		level: 3,
		type: "미디sk",
		detail: pants
	},
	{
		level: 3,
		type: "롱sk",
		detail: pants
	},
	{
		level: 1,
		type: "원피스/점프수트",
		detail: onepiece
	},
	{
		level: 2,
		type: "원피스",
		detail: onepiece
	},
	{
		level: 2,
		type: "점프수트",
		detail: onepiece
	},
	{
		level: 3,
		type: "미니op",
		detail: onepiece
	},
	{
		level: 3,
		type: "미디op",
		detail: onepiece
	},
	{
		level: 3,
		type: "롱op",
		detail: onepiece
	},
	{
		level: 3,
		type: "맥시",
		detail: onepiece
	},
	{
		level: 3,
		type: "단독",
		detail: onepiece
	},
	{
		level: 3,
		type: "레이어드",
		detail: onepiece
	},
	{
		level: 1,
		type: "잡화",
		detail: accessory
	},
	{
		level: 2,
		type: "가방",
		detail: accessory
	},
	{
		level: 2,
		type: "신발",
		detail: accessory
	},
	{
		level: 2,
		type: "기타",
		detail: accessory
	},
	{
		level: 3,
		type: "백팩",
		detail: accessory
	},
	{
		level: 3,
		type: "크로스백",
		detail: accessory
	},
	{
		level: 3,
		type: "토트백",
		detail: accessory
	},
	{
		level: 3,
		type: "숄드백",
		detail: accessory
	},
	{
		level: 3,
		type: "호보백",
		detail: accessory
	},
	{
		level: 3,
		type: "클러치",
		detail: accessory
	},
	{
		level: 3,
		type: "스니커즈",
		detail: accessory
	},
	{
		level: 3,
		type: "플랫슈즈/로퍼/힐/부츠/워커",
		detail: accessory
	},
	{
		level: 3,
		type: "샌들/슬리퍼/블로퍼/뮬",
		detail: accessory
	},
	{
		level: 3,
		type: "악세사리",
		detail: accessory
	},
	{
		level: 3,
		type: "양말/스타킹",
		detail: accessory
	},
	{
		level: 3,
		type: "모자",
		detail: accessory
	},
	{
		level: 3,
		type: "벨트",
		detail: accessory
	},
	{
		level: 3,
		type: "스카프/머플러/장갑/워머",
		detail: accessory
	}
]

export default detail