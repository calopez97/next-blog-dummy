import '../styles/main.scss';
import App from "next/app";
import Head from 'next/head'
class DummyTest extends App {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
  }

  
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              media="screen"
            />
            
        </Head>
        <Component {...pageProps}  />
        
      </>
    );
  }
}

export default DummyTest;
