import Image from "next/image";

export default function Skill(props:any){
    return(
        <div className="h-45 w-40 border-2 rounded-2xl pt-5 place-items-center">
            <Image src={props.qLin} width={100} height={100} alt="Picture of the author" className=""/>

            <p className="text-xl">{props.nome}</p>
        </div>
    )
}