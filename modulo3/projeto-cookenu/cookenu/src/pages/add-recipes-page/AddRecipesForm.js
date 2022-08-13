import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { addRecipes } from '../../services/recipes'

const AddRecipesForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })


    const onSubmitForm = (e) => {
        e.preventDefault()
        addRecipes(form, clear)
        alert("Receita criada com sucesso")
        navigate("/")
    }

    return (

        <form onSubmit={onSubmitForm}>
            <Box
                component="section"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    name='title'
                    type={'Title'}
                    label="Title"
                    value={form.title}
                    onChange={onChange}
                    required
                />

                <TextField
                    name='description'
                    type={'description'}
                    label="Description"
                    value={form.description}
                    onChange={onChange}
                    required
                />

                <TextField
                    name='image'
                    // type={'image'}
                    label="Url from image"
                    value={form.image}
                    onChange={onChange}
                    required
                />

                <button>Adicionar</button>
            </Box>
        </form>
    )
}

export default AddRecipesForm