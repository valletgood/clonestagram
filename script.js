document.addEventListener("DOMContentLoaded",
    function(e){            //계정이름 바꾸는 함수//
        let configID = document.querySelector("#id i")      //id가 id인 요소에서 i태그 선택//
        let idText = document.querySelector("#id span")     //id가 id인 요소에서 span태그 선택//

        /*변경할 값을 prompt로 받아 _idText라는 변수에 값을 저장
        만약 _idText에 null값이 들어오면 다시 입력하라는 알림창
        입력이 되면 그 값을 reId로 할당 후 id 변경*/
        

        configID.addEventListener("click",      
            function(e){
                let _idText = prompt('새로운 아이디를 입력하세요!')
                if(!_idText){
                    alert("꼭 입력해주세요")
                    let reId = prompt("다시 아이디를 입력해주세요!")
                    _idText = reId
                }
                idText.textContent = _idText
            }
        )

        /*프로필 변경을 위한 내용으로 DOM요소로 각각 ID와 Class를 찾아 받아옴
        새로운 변수 선언 및 input 태그를 다루겠다는 내용과 입력을 받으면 input를 통해 새로운 값으로 대체*/
        let profileEditButton = document.querySelector("#profile_info button")
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false

        profileEditButton.addEventListener("click",
            function(e){
                if(changing) {
                    let _userInfo = userInfo.querySelector("input").value
                    let _summary = summary.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo
                    summary.innerHTML = _summary

                    if (_profileDetail.startsWith("http")){
                        _profileDetail = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>"
                    }

                    profileDetail.innerHTML = _profileDetail

                    e.target.textContent = "프로필 편집"
                    changing = false
                }   else {
                    let _userInfo = userInfo.textContent
                    let _summary = summary.textContent
                    let _profileDetail = profileDetail.textContent

                    userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
                    summary.innerHTML = "<input value=" + _summary + "></input>"
                    profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }
            }
        )

        /* 프로필 사진 변경에 대한 내용
        마우스를 올리고 내릴 때 이벤트를 발생시키고 사진을 누르면 URL을 입력받아 src 태그를 변경해 사진 변경*/
        let profile_pic = document.querySelector("#profile_pic .circle_pic")
             profile_pic.addEventListener("mouseover",
                    function(e){
                        e.target.style.filter = "grayscale(100%)"
                    }
                )

                profile_pic.addEventListener("mouseleave",
                    function(e){
                        e.target.style.filter = 'grayscale(0%)'
                    }    
               )

                profile_pic.addEventListener("click",
                    function(e){
                        let profile_url = prompt("이미지 url을 입력하세요!")

                        if(!profile_url){
                            alert("꼭 입력해주세요")
                            let reorder = prompt("다시 URL을 입력해주세요!")
                            profile_url = reorder
                        }

                        profile_pic.setAttribute("src", profile_url)
                   }
                )
           
    }
)