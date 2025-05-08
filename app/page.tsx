import Image from "next/image";
import img from "@/public/image/teste.png"
import Skill from "./components/Skill";
import git from "@/public/image/icons8-github-96.png"

export default function Home() {
  return (
    <div className="">
      <header className="w-screen h-13  flex border justify-between items-center">
        <p className="ml-2">Fernando</p>{/* a */}

        <div className="inline-block">{/* a */}
          <a href="" className="mx-2">Home</a>
          <a href="" className="mx-2">About</a>
          <a href="" className="mx-2">Skills</a>
          <a href="" className="mx-2">Projects</a>
          <a href="" className="mx-2">Contact</a>
        </div>
      </header>
      <main className=" ml-80 mr-80">
        <div className="h-96 flex items-center justify-between ">{/* a */}
          <Image src={img} width={200} height={200} alt="Picture of the author" className=" rounded-full"/>
          <p className=" text-5xl">Bem vindo ao meu portfolio</p>
        </div>

        <div className=" h-96 flex items-center justify-between">{/* a */}
          <p className="w-auto text-3xl border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempore ipsum provident sapiente veritatis eaque delectus quo, nam ut suscipit quasi, earum sint aut qua</p>
          <Image src={img} width={300} height={300} alt="Picture of the author" className=""/>
        </div>
      

        <div className=" flex ">{/* a */}
        
          <Skill qLin={git}/>
        </div>

        
       <p>aaa

       </p>
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
