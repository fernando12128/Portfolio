import Image from "next/image";

export default function Skill(props:any){
    return(
        <div className="border-2 h-50 w-45 rounded-2xl pt-8">
            <Image src={props.qLin} width={90} height={90} alt="Picture of the author" className="block ml-9"/>

            <p className="block pt-4 ml-11">Github</p>
        </div>
    )
}