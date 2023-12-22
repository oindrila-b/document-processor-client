import { TypeAnimation } from 'react-type-animation';



export const AboutTheProject = () => {
    return (
        <div>

            <h1 className="title">
                About This Project
            </h1>
            <p className="desc" style={{ color: "white", fontWeight: "600", fontSize: "1.3em" }}>
                Documento allows the user to make a summary out of their document or get answer to questions regarding their document.<br />
                Documento uses NLP models in the backend to process the data and provide the services. <br /> The key services to look out for are the
                <span style={{ color: "turquoise" }}> Get Summary Service</span> and  <span style={{ color: "turquoise" }}> Ask Question</span> Services.
            </p>
            <div className="container">
                <h2 style={{ color: "white", fontWeight: "800", fontSize: "4em" }}>
                    This Project :
                </h2> {" "}
                <div className="animated-typing">
                    <TypeAnimation
                        sequence={[
                            'Is a Full Stack Application 🎯',
                            3000,
                            'Uses React JS for Frontend  🚀',
                            2500,
                            'Uses Python\'s Flask Framework for Backend 🗄',
                            2500,
                            'Uses Axios for the HTTP Network Calls 🏹',
                            2000,
                            'Uses NLP Models for processing the Data ⚙',
                            2000,
                            'Was implemented by Oindrila Banerjee 💻',
                            3000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2.8em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <div>
                    <h2 style={{ color: "white", fontWeight: "600", fontSize: "1.5em", marginTop: "4em" }}>
                        The Project Resources can be found in Github:
                    </h2>
                    <div style={{display:"flex", margin:"1.em", padding:"0.8em", justifyContent:"center"}}>
                        <ul style={{marginRight:"1em"}}>
                            <a href='https://github.com/oindrila-b/document-processor-client' style={{ color: "white",fontWeight: "600", fontSize: "1.4em" }}> Frontend </a>
                        </ul>
                        <ul style={{marginRight:"1em"}}>
                            <a href='https://github.com/oindrila-b/document_processor' style={{ color: "white", fontWeight: "600", fontSize: "1.4em" }}> Backend </a>
                        </ul>
                    </div>


                </div>
            </div>

        </div>
    )
}