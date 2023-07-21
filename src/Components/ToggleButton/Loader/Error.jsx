
const styles={
    'text-align': "center",
    'font-size': '2rem',
    padding: '4.8rem'
  }
const Error = ({message}) => {
  return (
    <div >
        <span style={styles}>{message}</span>
    </div>
  )
}

export default Error