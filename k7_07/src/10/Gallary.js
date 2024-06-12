import { useEffect, useState, useRef } from "react"
import GallaryCard from "./GallaryCard"
import ButtonC from "../Ui/ButtonC";

export default function Gallary() {
    const [gdata,setGdata] = useState();
    const [cards,setCards] = useState();
    const inRef = useRef();
    
    const handleOK = (e) => {
        console.log(inRef.current.value)
        e.preventDefault();
        if(inRef.current.value == ''){
            alert('키워드를 입력하세요.');
            inRef.current.focus();
            return ;
        }
    
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = url + `&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
        url = url + `&keyword=${encodeURI(inRef.current.value)}&_type=json`

        getFetchData(url);
    }
    
    const handleClear = (e) => {
        setGdata('');
        setCards('');
        inRef.current.value = '';
        inRef.current.focus('');
    }

    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setGdata(data.response.body.items.item)
            })
        console.log(getFetchData)
    }
    useEffect(()=>{

       
    },[])

    useEffect(()=>{
        if (!gdata)return;

        let tm = gdata.map(item => 
                            <GallaryCard 
                                key = {item.galContentId}
                                imgUrl = {item.galWebImageUrl}
                                title = {item.galTitle}
                                content = {item.galPhotographyLocation}
                                spTag = {item.galSearchKeyword}/>

        );
        setCards(tm);
    },[gdata]);

    return (
        <div className="w-full flex h-full flex-col justify-start items-start">
            <form className="w-full flex flex-col justify-center items-center">
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5 " >
                <div>
                    <input type="text" id = "txt1"
                            ref = {inRef}
                            className="bg-gray-50 border
                                        border-white
                                        text-gray-300 
                                        rounded-lg
                                        focus:ring-blue-500
                                        focus:border-blue-500 
                                        block w-full p-2.5 text-sm"/>
                </div>
                <div>
                    <ButtonC caption="확인" 
                            bcolor = 'green'
                            handleClick={handleOK}/>
                    <ButtonC caption="취소" 
                            bcolor = 'green'
                            handleClick={handleClear}/>
                </div>
            </div>   
            </form>
            <div className="w-full grid grid-cols-1 
                        md:grid-cols-2 lg:grid-cols-3
                        gap-2">
                {cards}
            </div>
        </div>
    )

}