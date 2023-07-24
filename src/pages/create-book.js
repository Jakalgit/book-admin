import React, {useState} from 'react';
import styles from "../styles/pages/create-book.module.css"
import HeightWrapper from "../components/HeightWrapper";
import Grid from "../components/Grid";
import Input from "../components/Input";

const CreateBook = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(100)
    const [discountPrice, setDiscountPrice] = useState(-1)
    const [description, setDescription] = useState('')
    const [beginningBook, setBeginningBook] = useState('')
    const [visibility, setVisibility] = useState(true)

    const createBook = () => {

    }

    return (
        <Grid>
            <HeightWrapper>

            </HeightWrapper>
        </Grid>
    );
};

export default CreateBook;