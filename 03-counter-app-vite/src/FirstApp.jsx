
<<<<<<< HEAD
import PropTypes from 'prop-types'
=======
const newMEssage = {
    message:  'Hola',
    title: 'Luis'
};

const miFun = () =>{
    return 'miFunTexto';
}

>>>>>>> 36cc4d3 (firsApp)


<<<<<<< HEAD
export const FirstApp = ({title, subtitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
    </>
  )
}


FirstApp.propTypes ={
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subtitle: "No hay subtitulo"
=======
export const FirstApp = () => {
    return (
        <>
            <h1>{JSON.stringify(miFun())}</h1>
            <p>Soy un subtitulo</p>
        </>
    )
>>>>>>> 6d39932 (haciendo uso de nodo padre <></>)
}