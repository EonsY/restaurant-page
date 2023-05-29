import './styles.css'
import { moduleReturn as changeContent } from './change-content'
import { generateBaseContent, aboutContent } from './generate-content'

(function script () {
    generateBaseContent()
    aboutContent()
    // Main content generation
    changeContent()
})()