import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase.config";
import { useFirebaseStore } from "../../store/UseFirebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  deleteField,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import VerticalCarousel from "../../components/carousel/verticalCarousel/VerticalCarousel";

// Mô tả các hàm trong firebase/fireStore
// 1, collection: truy suất đến collection name được tạo trên firestore
// 2, getDocs: lấy dữ liệu từ collection dựa theo name trên firestore
// 3, addDoc: thêm dữ liệu vào collection dựa theo name trên firestore
// 4, deleteDoc: xóa dữ liệu từ collection dựa theo name trên firestore
// 5, doc: truy suất đến document name được tạo trên firestore
// 6, deleteField: xóa field trong document dựa theo name trên firestore
// 7, updateDoc: cập nhật dữ liệu trong document dựa theo name trên firestore
// 8, onSnapshot: là hàm cập nhật dữ liệu realtime ( tránh dùng vì nó sẽ truy suất dữ liệu liên tục => máy yếu sẽ gây lag, với plan free thì sẽ hết lượt truy cập miễn phí : không dùng trong khoá này)



const Home = () => {
  const [count, setCount] = useState(60);
  const [inputVal, setInputVal] = useState("");

  const { dataStore, setDataStore, isLoading, setIsLoading } =
    useFirebaseStore();

  // các bước lấy data từ firestore
  // 1, truy suất đến collection name được tạo trên firestore
  const songRef = collection(db, 'songs')

  // 2,viet ham de lấy dữ liệu từ collection dựa theo name trên firestore
// voi ham getDocs nhan gia tri truyen vao la bien Ref duoc tao tu buoc 1
  const getFirebaseData = async () => { 
    setIsLoading(true)
    const res = await getDocs(songRef)
    console.log(res)
//3, như quan sát ta thây res trả về 1 trường docs có số phần từ === số document trong collection
// nhiệm vụ : cầm docs này map để lấy data của từng phần từ 1 trong docs
    const collectionData = res.docs.map((doc) => ({...doc.data(), id : doc.id}))
    setDataStore(collectionData);
    setIsLoading(false)
  }


  useEffect(
    () => {
      getFirebaseData()
    }, []
  )

  //4, map dataStore để render ra giao diện








  return (
    <div className="h-full w-full bg-blue-200 flex flex-1 justify-center items-center">
      {/* <div className="flex flex-1 flex-col justify-center items-center gap-y-4">
        <h1 className="text-[48px] text-black">{count}</h1>
        <input 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          
          />
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
        <button
            onClick={()=> setCount((prev) => prev - +inputVal)} 
            className="btn ">Giảm đi input</button>
          <button
            onClick={()=> setCount((prev) => prev -1)} 
            className="btn ">Giảm đi 1</button>
          <button
            onClick={() => setCount(60)} 
            className="btn">Reset</button>
          <button 
            onClick={() => setCount((prev) => prev +1)}
            className="btn">Tăng thêm 1</button>
            <button
            onClick={()=> setCount((prev) => prev + +inputVal)} 
            className="btn ">Tăng thêm input</button>
        </div>
      </div> */}
      <VerticalCarousel />
    </div>
  );
};

export default Home;
