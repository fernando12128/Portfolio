import Image from "next/image";
import img from "@/public/image/60632443.png"
import ttt from "@/public/image/teste.png"
import Skill from "./components/Skill";
import Projects from "@/app/components/Projects"


export default function Home() {
  return (
    <div>
      <header className="h-14 w-full  top-0 px-40 flex justify-between pt-3 bg-black text-white">
        <p className="ml-2">Fernando</p>{/* a */}

        <div className="inline-block ">{/* a */}
          
          <a href="#Sobremim" className="mx-2">About</a>
          <a href="#tecnico" className="mx-2">Skills</a>
          <a href="#projeto" className="mx-2">Projects</a>
          
        </div>
      </header>

      <main>
        <div  className="mt-24 mx-80 flex items-center justify-between">{/* HOME */}
          <Image src={img} width={250} height={250} alt="Picture of the author" className=" rounded-full"/>
          <div>
            <p className=" text-5xl">Bem vindo ao meu portfolio</p>
            <div className="flex mt-3">
              <a href="https://www.linkedin.com/in/fernando-calixto-alves/" target="_blank"><Image src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" width={40} height={40} alt="Picture of LinkedIn" /></a>
              <a href="https://github.com/fernando12128" target="_blank"><Image src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" width={40} height={40} alt="Picture of Github" /></a>
            </div>
          </div>
        </div>

          {/* <p>Sobre mim</p> */}
        <div  className="bg-black h-96 mt-24 "> {/* Sobre mim */}
          <p className="text-white ml-80 pt-10 text-2xl">Sobre mim</p>
          <div className="flex items-center justify-between">
            <p className="ml-80 text-3xl text-white ">Olá! Me chamo Fernando, tenho 20 anos e sou estudante de Sistemas de Informação. Sempre fui apaixonado por tecnologia, especialmente programação e jogos, o que despertou em mim o interesse em criar soluções criativas e funcionais. Atualmente, estou me dedicando ao desenvolvimento de projetos que combinam aprendizado constante e inovação.</p>
            <Image src={ttt} width={300} height={300} alt="Picture of the author" className="mr-80"/>
          </div>
        </div>
      

        <div id="tecnico" className="mt-24 ">{/* Conhecimento Tecnico */}
          <p className="ml-80 text-2xl">Skills</p>
          <div className="mx-80 mt-10 grid grid-cols-6 gap-4">
              <Skill qLin="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" nome="Git"/>
              <Skill qLin="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" nome="JavaScript"/>
              <Skill qLin="https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=000000" nome="Expo"/>
              <Skill qLin="https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=000000" nome="NextJs"/>
              <Skill qLin="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=#000000" nome="Tailwindcss"/>
              <Skill qLin="https://img.icons8.com/?size=100&id=62452&format=png&color=000000" nome="Firebase"/>
              <Skill qLin="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" nome="Docker"/>
              <Skill qLin="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" nome="Github"/>
          </div>
        </div>

        <div id="projeto" className="mt-24 ">{/* Projetos realizados */}
          <p className="ml-80 text-2xl"> Projetos</p>
          <div className="mx-80 mt-10 grid grid-cols-2 gap-7">
            <Projects />
            <Projects />
            <Projects />
          </div>
        </div>

      </main>
      
      <footer className="mt-24 h-20 bg-black flex justify-center items-center">
        <p className="text-amber-50 ">&#169; Fernando Calixto</p>
      </footer>
    </div>
  );
}
