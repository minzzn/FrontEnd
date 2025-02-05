import Header from "components/common/Header";
import PostForm from "components/post/PostForm";
import Footer from "components/common/Footer";

export default function New() {

    return (
        <>
            <Header linkTextDisplay={true} />
            <PostForm />
            <Footer />
        </>
    )
}