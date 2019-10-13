/*
import fs from 'fs'
import path from 'path'
import { BrowserWindow, dialog, ipcMain, shell } from 'electron'
import log from 'electron-log'
import { isDirectory, isFile } from 'common/filesystem'
import { MARKDOWN_EXTENSIONS, isMarkdownFile, isMarkdownFileOrLink } from 'common/filesystem/paths'
import { EXTENSION_HASN, PANDOC_EXTENSIONS, URL_REG } from '../../config'
import { normalizeAndResolvePath, writeFile } from '../../filesystem'
import { writeMarkdownFile } from '../../filesystem/markdown'
import { getPath, getRecommendTitleFromMarkdownString } from '../../utils'
import pandoc from '../../utils/pandoc'

/*

    New tab
    ---Separator---
    Close
    Close others
    Close saved tabs
    Close all tabs
    ---Separator---
    Rename
    Copy path
    Show in folder
*/

export const newBlankTab = win => {
  win.webContents.send('mt::new-untitled-tab')
}

export const closeTab = win => {
  win.webContents.send('AGANI::close-tab')
}

export const closeAllTab = win => {
  win.webContents.send('AGANI::close-tab')
}
