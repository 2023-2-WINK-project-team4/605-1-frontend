import React, { useState, useEffect } from 'react'
import '../../App.css'

export default function MyProfile() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // 데이터를 불러오는 비동기 함수
    const fetchData = async () => {
      try {
        const response = await fetch('/src/db/data.json') // 데이터 파일의 경로를 확인해주세요.
        const data = await response.json()

        // 사용자 정보를 상태에 설정
        setUserData(data.userInformation[0])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // 데이터 불러오기
    fetchData()
  }, []) // useEffect를 빈 배열로 설정하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className="myProfile-container">
      <h2>나의 프로필</h2>
      {userData && (
        <ul>
          <li>이름: {userData.name}</li>
          <li>동아리: {userData.club}</li>
          <li>학번: {userData.studentId}</li>
          {/* 다른 정보들도 추가 가능 */}
          <img src={userData.profile} alt="프로필 사진" />
        </ul>
      )}
    </div>
  )
}
