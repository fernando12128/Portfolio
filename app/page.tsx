import Image from "next/image";
import img from "@/public/image/teste.png"
import Skill from "./components/Skill";
import Projects from "@/app/components/Projects"
import git from "@/public/image/icons8-github-96.png"

export default function Home() {
  return (
    <div className="">
      <header className="w-screen h-14 px-40 flex border justify-between pt-3">
        <p className="ml-2">Fernando</p>{/* a */}

        <div className="inline-block">{/* a */}
          <a href="" className="mx-2">Home</a>
          <a href="" className="mx-2">About</a>
          <a href="" className="mx-2">Skills</a>
          <a href="" className="mx-2">Projects</a>
          <a href="" className="mx-2">Contact</a>
        </div>
      </header>

      <main className="mx-80 ">
        <div className="mt-24 flex items-center justify-between">{/* HOME */}
          <Image src={img} width={200} height={200} alt="Picture of the author" className=" rounded-full"/>
          <p className=" text-5xl">Bem vindo ao meu portfolio</p>
        </div>

          {/* <p>Sobre mim</p> */}
        <div className="mt-20 flex items-center justify-between">{/* Sobre mim */}
          <p className="text-3xl border ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempore ipsum provident sapiente veritatis eaque delectus quo, nam ut suscipit quasi, earum sint aut qua</p>
          <Image src={img} width={300} height={300} alt="Picture of the author" className=""/>
        </div>
      

        <div className="mt-24 grid grid-cols-6 gap-4">{/* Conhecimento Tecnico */}

          <Skill qLin="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" nome="Git"/>
          <Skill qLin="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" nome="JavaScript"/>
          <Skill qLin="https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=000000" nome="Expo"/>
          <Skill qLin="https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=000000" nome="NextJs"/>
          <Skill qLin="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=#000000" nome="Tailwindcss"/>
          <Skill qLin="https://img.icons8.com/?size=100&id=62452&format=png&color=000000" nome="Firebase"/>
          <Skill qLin="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" nome="Docker"/>
          <Skill qLin="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" nome="Github"/>

        </div>

        <div className="mt-24 grid grid-cols-2 gap-7">{/* Projetos realizados */}

        <Projects />
        <Projects />
        <Projects />
        </div>

      </main>
      
      <footer className="">
        
      </footer>
    </div>
  );
}
