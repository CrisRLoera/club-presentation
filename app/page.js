

export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center text-5xl font-mono py-5">Club de Programación</h1>
      <h2 className="flex justify-center text-xl font-mono py-5">¡Bienvenido a la página del club de programación!</h2>
      <div className="flex justify-center py-5">
        <img src='/5.png' style={{ width: '500px', height: '500px', borderRadius:'2%' }} alt='Git Course' />
      </div>
      <div className="flex justify-center py-5">
        <img src='/6.png' style={{ width: '500px', height: '500px', borderRadius:'2%' }} alt='Angular Course' />
      </div>
      <div className="flex justify-center py-5">
        <img src='/7.png' style={{ width: '500px', height: '500px', borderRadius:'2%' }} alt='Linux Course' />
      </div>
      <p className="flex justify-center text-xl font-mono py-5 text-lime-500">&lt; Este es un espacio para ti &gt;</p>
    </div>
  );
}
