const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 50,
      width: '100%',
      backgroundColor: "#e0e0de",
      marginTop: 16,
      marginBottom: 16,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <p>0%</p>
                <p>50%</p>
                <p>100%</p>
            </div>
      </div>
    );
  };
  
  export default ProgressBar;