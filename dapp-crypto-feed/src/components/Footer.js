import styles from "@/app/page.module.css";

export default function Footer(){

    return (
        <div className={`${styles.footerFixed} `}>

        <footer className={`d-flex flex-wrap justify-content-between align-items-center py-3 container`}>
            <p className="col-md-6 mb-0 text-body-secondary" style={{color: "white !important;"}}>
                &copy; {new Date().getFullYear()}&nbsp;
                 <a href="https://github.com/ejrgeek/crypto-feed" style={{color: "#06B5D9", textDecoration: "none"}} target="_blank" className="fw-bold">Crypto Feed</a>
                 &nbsp;made with ❤️ by&nbsp;
                 <a href="https://erlondnjr.com.br/" style={{color: "#06B5D9", textDecoration: "none"}}  target="_blank" className="fw-bold">Erlon Dantas</a>
            </p>
        </footer>
        </div>
    )
}