import { Box, Typography, Card, Link } from '@mui/material';
import SectionTitle from './SectionTitle';

export default function Footer() {

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
    );
};