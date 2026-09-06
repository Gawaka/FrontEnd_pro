import { Box, Typography, Card, CardMedia, CardContent, CardActions, Chip, Button, Stack } from '@mui/material';
import { projectsData } from '../data';
import SectionTitle from '../components/SectionTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Portfolio() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        
        <Box>
            <SectionTitle title="Мої Проєкти" bgColor={'secondary.main'}/>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800 }}>
            Добірка веб-додатків, які демонструють мій підхід до архітектури, управління станом та верстки інтерфейсів.
            </Typography>
        </Box>
        <Box 
            sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4 
            }}
        >
            {projectsData.map((project)=> (
                <Card
                    key={project.id}
                    elevation={0}
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow: '0px 4px 20px rgba(121, 134, 203, 0.05)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0px 8px 30px rgba(121, 134, 203, 0.15)',
                        }
                    }}
                >
                    {project.preview ? (
                        <CardMedia
                            component="img"
                            height="200"
                            image={project.preview}
                            alt={project.title}
                            sx={{ 
                            objectFit: 'cover',
                            borderBottom: '1px solid',
                            borderColor: 'divider'
                            }}
                        />
                        ) : (
                        <Box 
                            sx={{ 
                            height: 200, 
                            bgcolor: project.accentColor || 'primary.light', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            borderBottom: '1px solid',
                            borderColor: 'divider'
                            }}
                        >
                            <Typography fontWeight={500} color={project.textColor || 'primary.main'}>
                            Прев'ю проєкту
                            </Typography>
                        </Box>
                        )}
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
                        <Typography variant="h6" component="h2" fontWeight={700}>
                            {project.title}
                        </Typography>
                        
                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                            {project.description}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                            {project.tags.map((tag) => (
                                <Chip 
                                    key={tag} 
                                    label={tag} 
                                    size="small" 
                                    sx={{ 
                                        bgcolor: 'background.default', 
                                        border: '1px solid', 
                                        borderColor: 'divider',
                                        color: 'text.secondary',
                                        fontWeight: 500
                                    }} 
                                />
                            ))}
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                        <Button 
                            variant="contained" 
                            disableElevation
                            endIcon={<OpenInNewIcon />}
                            href={project.demoLink}
                            target="_blank"
                            sx={{ 
                                borderRadius: 2, 
                                textTransform: 'none', 
                                fontWeight: 600 
                            }}
                        >
                            Live Demo
                        </Button>
                        <Button 
                            variant="outlined" 
                            startIcon={<GitHubIcon />}
                            href={project.githubLink}
                            target="_blank"
                            sx={{ 
                                borderRadius: 2, 
                                textTransform: 'none', 
                                fontWeight: 600, 
                                color: 'text.primary', 
                                borderColor: 'divider' 
                            }}
                        >
                            GitHub
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    </Box>
    );
};