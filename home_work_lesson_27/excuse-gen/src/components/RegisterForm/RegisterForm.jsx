import { useFormik } from "formik";
import './registerForm.scss';

function RegisterForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: validate,
        onSubmit: (values, {resetForm})=> {
            console.log('Все гуд!:', values);
            resetForm();
        }
    });

    function validate(values) {
        const errors = {};

        if(!values.email) {
            errors.email = 'Це поле обов\'язкове';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неправильний формат пошти';
        } 

        if (!values.password) {
            errors.password = 'Це поле обов\'язкове';
        } else if (values.password.length < 8) {
            errors.password = 'Пароль має бути мінімум 8 символів';
        }

        if (values.password !== values.confirmPassword) {
            errors.password = 'Паролі мають збігатися';
        } else if (values.password.length < 8) {
            errors.password = 'Підтвердіть пароль';
        }

        return errors;
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            {!formik.isValid && formik.submitCount > 0 && (
                <div className="alert-error">
                    Будь ласка, виправте помилки у полях нижче.
                </div>
            )}
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>

            <div className="input-group">
                <label htmlFor="password">Пароль</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <label htmlFor="password">Підтвердіть пароль</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
                {formik.touched.password && formik.errors.password ? (
                    <span className="error-text">{formik.errors.password}</span>
                ) : null}
            </div>
            <button className="btn-submit" type="submit">Зареєструватися</button>
        </form>
    );
};

export default RegisterForm;