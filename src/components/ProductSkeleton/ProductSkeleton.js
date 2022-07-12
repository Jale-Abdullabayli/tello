import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
    <>

        <div className="container">
            <div className="row">
                {[...Array(4).keys()].map((el,index) => (
                    <div key={index} className="col-md-3">
                       <div className="skeleton">
                       <ContentLoader
                            speed={2}
                            height={320}
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="0" rx="3" ry="3" width="80%" height="200" />
                            <rect x="0" y="220" rx="3" ry="3" width="80%" height="20" />
                            <rect x="0" y="260" rx="3" ry="3" width="60%" height="20" />
                            <rect x="0" y="300" rx="3" ry="3" width="30%" height="20" />

                        </ContentLoader>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    </>

)


export default MyLoader;

