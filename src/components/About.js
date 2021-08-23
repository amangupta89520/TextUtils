import Image from '../assets/profile.jpg';

const About = (props) => {

    return (
        <div className="container my-4">   
          <img src={Image} alt="" style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "250", MozBorderRadius: "250px", WebkitBorderRadius: "250px"  }} />
          <h1 className={ props.mode === 'light'? "text-dark mt-4" : "text-light mt-4"}>Aman Gupta</h1>
          <h5 className={ props.mode === 'light'? "text-dark" : "text-light"}>Web Developer</h5>
          <p className={ props.mode === 'light'? "text-dark my-2" : "text-light my-2"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi reiciendis totam officia at molestiae porro corporis laboriosam natus nesciunt excepturi voluptatibus officiis culpa expedita quis ratione eos ut recusandae quisquam, repellendus nemo dolorum a! Iusto est ipsam totam, veritatis illum obcaecati aspernatur minus doloribus repellat dicta praesentium nisi alias? Expedita voluptatibus eveniet fugit molestias a iusto dolor sunt porro voluptatum perspiciatis ea dignissimos, laborum eum similique maiores quae, recusandae eaque. Beatae eum nulla id ullam commodi doloremque aperiam placeat, minima atque dolore cum vel sint itaque velit laboriosam ex! Facere, et. Eius aliquid ea, molestias magni consequuntur deleniti atque a corporis est doloribus. Magni, temporibus ad velit ipsa obcaecati dolores aspernatur natus explicabo ipsum rerum odio deleniti, labore quas aut magnam rem nobis in itaque at, optio mollitia! Consectetur, neque adipisci veniam, nobis rem sit natus enim mollitia unde voluptates perferendis quia fugit harum quis reprehenderit sunt aut, minima expedita soluta? Ratione tenetur praesentium architecto, laborum sit maiores eum veritatis, velit quasi esse obcaecati id voluptatem dolorum quas nihil possimus, iusto animi eveniet dolorem in qui. Doloremque tempore odio ratione quasi in quae quisquam, laboriosam facilis, est voluptatibus, quaerat ipsam eos commodi? Amet optio recusandae possimus sed architecto veritatis repellat quas distinctio cum eos praesentium quae modi consequatur dolore maiores, doloribus doloremque dolorum! Explicabo expedita perferendis ea blanditiis sed incidunt autem, natus numquam, aspernatur, soluta ipsa eius! Perferendis molestiae, totam modi eos quam vero! Ullam, tempore ex culpa possimus nihil amet, dolores, officiis vero facere omnis aliquam incidunt mollitia!</p>
        </div>
    );
}
 
export default About;