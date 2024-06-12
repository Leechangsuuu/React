// import { useState } from "react";
import ButtonC from "../Ui/ButtonC"

export default function Traffic_Nav({title, c , sel, setSel}) {
    // const c = ['차대사람', '차대차' ,'차량단독', '철길건널목' ]
    // const title = '대분류';
    // const [sel,setSel] = useState();
    const cTag = c.map((item) => <ButtonC caption = {item}
                                     key = {item}
                                     bcolor = {sel === item ? 'yellow':'green'}
                                     handleClick = {() => handleClick(item)}
                                     />);
    const handleClick = (item) => {
        console.log(item)
        setSel(item)
    }
    return (
    <div className="w-full flex justify-start items-start my-5 "> 
      <div className="w-1/5 flex justify-start items-center">
        교통사고 {title}
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
  )
}
