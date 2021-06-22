import React from "react";
import './style/Main.css'

function Main() {
	return (
    <div>
      <div className="main">
        <p className="logo">
					<span className="title">COAWAY</span>
				</p>
        <div>corona go away!</div>
				<div className="description">국내 코로나 현황과 접종현황, 백신 정보 등을 소개하는 페이지입니다.</div>
				<div className="box"></div>
      </div>
			<div className="card"></div>
    </div>
	)
}

export default Main;