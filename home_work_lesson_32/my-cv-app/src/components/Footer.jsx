import { Box, Typography, Card, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionTitle from './SectionTitle';
import { locationMap } from '../data';

export default function Footer() {

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SectionTitle title="Контакти" bgColor={'warning.main'}/>
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
                        <Box sx={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                gap: 1, 
                                textAlign: 'center'
                            }}>
                            <EmailIcon fontSize="small" />
                            <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                display="block" 
                                sx={{ mb: 0.5, fontWeight: 700, letterSpacing: 0.5 }}
                                >
                                EMAIL
                            </Typography>
                        </Box>
                        <Link 
                            href="mailto:paskm001@gmail.com" 
                            target="_blank"
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
                        <Box sx={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                gap: 1, 
                                textAlign: 'center'
                            }}>
                            <TelegramIcon fontSize="small" />
                            <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                display="block" 
                                sx={{ mb: 0.5, fontWeight: 700, letterSpacing: 0.5 }}
                                >
                                TELEGRAM
                            </Typography>
                        </Box>
                        <Link 
                            href="tg://resolve?domain=mmyskam"
                            target="_blank"
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
                            <Box sx={{
                                    display: 'flex', 
                                    flexDirection: 'row', 
                                    gap: 1, 
                                    textAlign: 'center'
                                }}>
                                <GitHubIcon fontSize="small" />
                                <Typography 
                                    variant="caption" 
                                    color="text.secondary" 
                                    display="block" 
                                    sx={{ mb: 0.5, fontWeight: 700, letterSpacing: 0.5 }}
                                    >
                                    GITHUB
                                </Typography>
                            </Box>
                        <Link 
                            href="https://github.com/Gawaka"
                            target="_blank"
                            variant="body2" 
                            fontWeight={500}
                            underline="hover"
                        >
                            https://github.com/Gawaka
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
                        <Box sx={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                gap: 1, 
                                textAlign: 'center'
                            }}>
                            <PlaceIcon fontSize="small" />
                            <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                display="block" 
                                sx={{ mb: 0.5, fontWeight: 700, letterSpacing: 0.5 }}
                                >
                                Локація
                            </Typography>
                        </Box>
                        <Link 
                            href={locationMap}
                            target="_blank"
                            variant="body2" 
                            fontWeight={500}
                            underline="hover"
                            >
                            Кременчук, Україна
                        </Link>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};