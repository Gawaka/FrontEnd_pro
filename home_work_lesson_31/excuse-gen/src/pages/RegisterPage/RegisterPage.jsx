import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './registerPage.scss';

function RegisterPage() {

    return(
        <div className="register-page">
            <div className="register-container">
                <h2>Створити акаунт</h2>
                <RegisterForm/>
            </div>
        </div>
    )
};

export default RegisterPage;