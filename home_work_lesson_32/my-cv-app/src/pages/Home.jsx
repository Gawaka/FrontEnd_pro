import { Box, Typography, Card, CardContent, Chip, Stack, Avatar, Link} from '@mui/material';
import SectionTitle from '../components/SectionTitle';
import photo from '../assets/photo.jpg';


export default function Home() {
    const skills = [
        'React', 'TypeScript', 'JavaScript', 
        'HTML', 'CSS', 'SCSS / SASS', 'GIT',
        'Redux Toolkit', 'Vite', 
        'MUI', 'Cypress'
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Card
                elevation={0}
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                    p: { xs: 3, md: 5 },
                    gap: { xs: 3, md: 5 },
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                    boxShadow: '0px 4px 20px rgba(121, 134, 203, 0.08)'
                }}
                >
                <Box>
                    <Avatar
                        alt="photo"
                        src={photo}
                        sx={{
                            width: { xs: 160, md: 220 },
                            height: { xs: 160, md: 220 },
                            bgcolor: 'secondary.light',
                            color: 'secondary.main',
                            flexShrink: 0,
                            border: '4px solid #fff',
                            boxShadow: '0 8px 16px rgba(77, 182, 172, 0.2)'
                        }}
                    />
                </Box>
                <CardContent sx={{width: '100%', p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                        Максим Міщенко
                    </Typography>
                    <Typography variant="h6" color="primary.main" fontWeight={500} gutterBottom>
                        Front-end Software Engineer
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                        Спеціалізуюся на створенні сучасної клієнтської частини веб-додатків. Пишу чистий компонентний код, працюю зі складною логікою на клієнті та інтеграцією API. Орієнтуюсь на Mobile First дизайн, ідеальну верстку за макетами Figma та ефективне управління станом.
                    </Typography>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: 1, 
                            justifyContent: { xs: 'center', md: 'flex-start' } 
                        }}
                    >
                        {skills.map((skill) => (
                        <Chip 
                            key={skill} 
                            label={skill} 
                            sx={{ 
                                bgcolor: 'primary.light', 
                                color: 'primary.main', 
                                fontWeight: 500,
                                borderRadius: '24px' 
                            }} 
                        />
                        ))}
                    </Box>
                </CardContent>
            </Card>
            <Box>
                <SectionTitle title="Досвід та Проєкти" />
                <Card 
                    elevation={0} 
                    sx={{ 
                        p: { xs: 3, md: 5 }, 
                        borderRadius: 4, 
                        boxShadow: '0px 4px 20px rgba(121, 134, 203, 0.08)' 
                    }}
                    >
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" color="primary.main" fontWeight={600}>
                            Front-End Developer (Freelance / Independent Contractor)
                        </Typography>
                        
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                            Вересень 2025 – Теперішній час
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, m: 0, mb: 2, color: 'text.secondary', typography: 'body1' }}>
                            <Box component="li" sx={{ mb: 1 }}>
                                <strong>Landing Pages & Affiliate-маркетинг:</strong> Створював висококонверсійні лендінги та промо-сторінки на замовлення команди performance-маркетингу. Фокусувався на максимальній швидкості завантаження та кросбраузерній адаптивності.
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <strong>Розробка SPA з нуля:</strong> Спроєктував та запустив кілька вебзастосунків (включаючи платформу для настільних RPG), використовуючи React, TypeScript та Vite.
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <strong>Архітектура та логіка:</strong> Побудував масштабовану компонентну структуру, написав кастомні хуки та налаштував глобальний стейт-менеджмент через Redux Toolkit.
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <strong>UI/UX та верстка:</strong> Створив адаптивні mobile-first інтерфейси на основі макетів з Figma, використовуючи модульний SCSS/SASS.
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <strong>Робота з даними:</strong> Інтегрував сторонні API за допомогою Axios, налаштував обробку асинхронних запитів та взаємодію з LocalStorage та Firebase.
                            </Box>
                            <Box component="li">
                                <strong>CI/CD та інфраструктура:</strong> Забезпечив повний цикл розробки: ведення репозиторіїв у GitHub, вирішення merge-конфліктів та налаштування автоматичного деплою на Vercel.
                            </Box>
                        </Box>
                        <Typography 
                            variant="body2" 
                            color="text.primary">
                            <Typography 
                                component="span" 
                                fontWeight={600} 
                                color="primary.main"
                            >
                                Технології:
                            </Typography>{' '}
                            JavaScript (ES6+), React, TypeScript, Redux Toolkit, Vite, SCSS/SASS, Axios, Git/GitHub, Vercel, Figma.
                        </Typography>
                    </Box>
                </Card>
            </Box>
            <Box>
                <SectionTitle title="Освіта"/>
                <Stack spacing={3}>
                    <Card 
                        elevation={0} 
                        sx={{ 
                            p: { xs: 3, md: 5 }, 
                            borderRadius: 4, 
                            boxShadow: '0px 4px 20px rgba(121, 134, 203, 0.08)' 
                        }}
                    >
                        <Stack 
                            direction="row" 
                            justifyContent="space-between"
                            alignItems="flex-start" 
                            mb={1}
                        >
                            <Typography fontWeight={700} color="text.primary">
                                "Hillel IT scooll" - курс "Front-end розробник"
                            </Typography>
                            <Typography variant="body2" color="warning.main" fontWeight={700}>
                                2025 - 2026
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            Глибоке вивчення екосистеми веб-розробки: від семантичного HTML/CSS до просунутого React та управління станом. Робота з Git, GitHub та налаштування локального середовища (VS Code).
                        </Typography>
                    </Card>
                    <Card 
                        elevation={0} 
                        sx={{ 
                            p: { xs: 3, md: 5 }, 
                            borderRadius: 4, 
                            boxShadow: '0px 4px 20px rgba(121, 134, 203, 0.08)' 
                        }}
                    >
                        <Stack 
                            direction="row" 
                            justifyContent="space-between"
                            alignItems="flex-start" 
                            mb={1}
                        >
                            <Typography fontWeight={700} color="text.primary">
                                "Класичний приватний університет" — Маркетинг (Студент)
                            </Typography>
                            <Typography variant="body2" color="warning.main" fontWeight={700}>
                                2023 - Теперішній час
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            Вивчення цифрового маркетингу, поведінки споживачів, аналітики та SEO. 
                            Розуміння бізнес-метрик, що допомагає створювати UI/UX з фокусом на конверсію та ефективну взаємодію з користувачем.
                        </Typography>
                    </Card>
                </Stack>
            </Box>
            <Box>
                <SectionTitle title="Контакти" />
                <Card
                    elevation={0} 
                    sx={{ 
                        p: { xs: 3, md: 5 }, 
                        borderRadius: 4, 
                        boxShadow: '0px 4px 20px rgba(121, 134, 203, 0.08)' 
                    }}
                    >
                    <Box
                        sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
                            gap: 2 
                        }}
                        >
                        <Box 
                            sx={{ p: 2, 
                                bgcolor: 'background.default',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 2, 
                                border: '1px solid', 
                                borderColor: 'divider' 
                            }}>
                            <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                display="block" 
                                sx={{ mb: 0.5, fontWeight: 700, letterSpacing: 0.5 }}>
                                EMAIL
                            </Typography>
                            <Link 
                                href="mailto:paskm001@gmail.com" 
                                variant="body2" 
                                fontWeight={500}
                                underline="hover"
                            >
                                paskm001@gmail.com
                            </Link>
                        </Box>
                        <Box 
                            sx={{ 
                                p: 2, 
                                bgcolor: 'background.default', 
                                borderRadius: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid', 
                                borderColor: 'divider' 
                            }}>
                            <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                display="block"
                                sx={{ mb: 0.5, fontWeight: 700, letterSpacing: 0.5 }}>
                                TELEGRAM
                            </Typography>
                            <Link 
                                href="tg://resolve?domain=mmyskam"
                                variant="body2" 
                                fontWeight={500}
                                underline="hover"
                            >
                                @mmyskam
                            </Link>
                        </Box>
                        <Box sx={{ 
                            p: 2, 
                            bgcolor: 'background.default', 
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid', 
                            borderColor: 'divider' 
                            }}>
                            <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                display="block" 
                                sx={{ mb: 0.5, fontWeight: 700, letterSpacing: 0.5 }}
                                >
                                GITHUB
                            </Typography>
                            <Link 
                                href="https://github.com/Gawaka"
                                variant="body2" 
                                fontWeight={500}
                                underline="hover"
                            >
                                https://github.com/Gawaka
                            </Link>
                        </Box>
                        <Box 
                            sx={{ 
                                p: 2, 
                                bgcolor: 'background.default', 
                                borderRadius: 2, 
                                border: '1px solid', 
                                borderColor: 'divider',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                            <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                display="block" 
                                sx={{ mb: 0.5, fontWeight: 700, letterSpacing: 0.5 }}
                                >
                                ЛОКАЦІЯ
                            </Typography>
                            <Typography variant="body2" fontWeight={500} color="primary.main">
                                Кременчук, Україна
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}