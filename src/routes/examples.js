import { Router } from 'express'
import { mainPage } from '../controllers/example.controller.js'

const router = Router()
  
  router.get('/design-for-portfolio.vercel.app', (req, res) => {
    res.redirect('https://design-for-portfolio.vercel.app')
  })
  
  router.get('/design-for-tg-figma.vercel.app', (req, res) => {
    res.redirect('https://design-for-tg-figma.vercel.app')
  })
  
  router.get('/design-for-tg.vercel.app', (req, res) => {
    res.redirect('https://design-for-tg.vercel.app')
  })
  
  router.get('/design-01-gamma.vercel.app', (req, res) => {
    res.redirect('https://design-01-gamma.vercel.app')
  })
  
  router.get('/t.me/@SaidovAliakbar', (req, res) => {
    res.redirect('https:///t.me/@SaidovAliakbar')
  })
  
  router.get('https://www.instagram.com/a_devv_s/', (req, res) => {
    res.redirect('https://www.instagram.com/a_devv_s/')
  })
  
  router.get('https://github.com/MrRuiner', (req, res) => {
    res.redirect('https://github.com/MrRuiner')
  })
  
  router.get('https://discordapp.com/users/960061651690848276/', (req, res) => {
    res.redirect('https://discordapp.com/users/960061651690848276/')
  })

  router.get('/', mainPage)
  

export default router