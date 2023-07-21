
const loaderStyle= {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: '600',
    margin: '4.8rem'
  }
function Loader() {
  return (
    <div>
        <p style={loaderStyle}>Loading</p>
    </div>
  )
}

export default Loader