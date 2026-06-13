import React from 'react'
import Card from "./Card";
import Header from "./Header";
import TodoContainer from "./TodoContainer";
import { useLocation } from 'react-router-dom';

const Landing = () => {
    const data = useLocation()
    
  return (
    <div className="bg-black md:p-16 p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header name = {data.state.user}/>

        <div className="flex justify-between my-5 gap-7 flex-wrap ">
          <Card bgcolor={"#B272DA"} title={"23"} subtitle={"chennai"} />
          <Card
            bgcolor={"#FD6663"}
            title={"December"}
            subtitle={"11:06:2026"}
          />
          <Card bgcolor={"#FCA201"} title={"Built"} subtitle={"Using React"} />
        </div>

        <TodoContainer />

      </div>
    </div>
  )
}

export default Landing