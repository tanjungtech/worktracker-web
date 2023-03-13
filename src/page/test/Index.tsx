import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import NavSection from './NavSection'

const Index = () => {

  return (
    <div>
      <NavSection />
      <div className='section-content-list'>
        <div className='block-wrapper motion-header-paper-wrapper'>
          <div className='flex justify-content-space-between'>
            <div className='motion-paper-label motion-list-item flex-basis-40'>Test Name</div>
            <div className='motion-paper-label motion-list-item flex-basis-20 text-align-center'>Progress</div>
            <div className='motion-paper-label motion-list-item flex-basis-20 text-align-center'>Platform</div>
            <div className='motion-paper-label motion-list-item flex-basis-20 text-align-center'>Last Updated</div>
            <div className='motion-paper-label motion-list-item flex-basis-20 text-align-center'>Status</div>
          </div>
        </div>
        <div className='block-wrapper motion-paper-wrapper'>
          <div className='flex justify-content-space-between motion-content-paper-wrapper'>
            <div className='motion-list-item flex-basis-40'>
              <div className='motion-list-main-title'>Functionality Test for Mobile</div>
              <div className='motion-list-main-subtitle'>Promotion Banner</div>
            </div>
            <div className='motion-list-item flex-basis-20 text-align-center'>9 of 22 unit</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>Android, iOS</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>05 Maret 2023</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>
              <span className="label-status ongoing-mode">Ongoing</span>
            </div>
          </div>
          <div className='motion-content-wrapper'>
            <div className='flex justify-content-space-between motion-content-list-body'>
              <div className='motion-list-item flex-basis-80'>
                <div className='motion-list-body-title'>CallToAction String Label + Menu</div>
                <div className='parent-hierarchy'>
                  <div className='motion-list-hieararchy'>Halaman detail Promotion menampilkan button yang menuju Menu sesuai Value Call To Action, button memiliki label sesuai value Action Label.</div>
                </div>
              </div>
              <div className='motion-list-item flex-basis-20 text-align-center'>04 Maret 2023</div>
              <div className='motion-list-item flex-basis-20 text-align-center'>
                <span className="label-status-flat">Untested</span>
              </div>
            </div>
            <div className='flex justify-content-center motion-content-list-body'>
              <Link to='/' className='link-with-icon-radius neutral-variant'>Resume <ArrowRightAltIcon /></Link>
            </div>
          </div>
        </div>
        <div className='block-wrapper motion-paper-wrapper'>
          <div className='flex justify-content-space-between motion-content-paper-wrapper'>
            <div className='motion-list-item flex-basis-40'>
              <div className='motion-list-main-title'>Functionality Test for Desktop</div>
              <div className='motion-list-main-subtitle'>Promotion Banner</div>
            </div>
            <div className='motion-list-item flex-basis-20 text-align-center'>9 of 22 unit</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>Windows</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>05 Maret 2023</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>
              <span className="label-status ongoing-mode">Ongoing</span>
            </div>
          </div>
          <div className='motion-content-wrapper'>
            <div className='flex justify-content-space-between motion-content-list-body'>
              <div className='motion-list-item flex-basis-80'>
                <div className='motion-list-body-title'>Order Consecutive</div>
                <div className='parent-hierarchy'>
                  <div className='motion-list-hieararchy'>Promotion tampil mengikuti urutan order (tertinggi tampil paling atas, descending).</div>
                  <div className='motion-list-hieararchy'>Tampil pada halaman List Promotion dan Popup Banner (Promotion Type sekarang).</div>
                </div>
              </div>
              <div className='motion-list-item flex-basis-20 text-align-center'>n/a</div>
              <div className='motion-list-item flex-basis-20 text-align-center'>
                <span className="label-status-flat">Untested</span>
              </div>
            </div>
            <div className='flex justify-content-center motion-content-list-body'>
              <Link to='/' className='link-with-icon-radius neutral-variant'>Resume <ArrowRightAltIcon /></Link>
            </div>
          </div>
        </div>
        <div className='block-wrapper motion-paper-wrapper'>
          <div className='flex justify-content-space-between motion-content-paper-wrapper'>
            <div className='motion-list-item flex-basis-40'>
              <div className='motion-list-main-title'>Filantropi Functionality Test</div>
              <div className='motion-list-main-subtitle'>Filantropi Enhancement</div>
            </div>
            <div className='motion-list-item flex-basis-20 text-align-center'>15 of 17 unit</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>Windows, Android, iOS</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>03 Maret 2023</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>
              <span className="label-status ongoing-mode">Ongoing</span>
            </div>
          </div>
          <div className='motion-content-wrapper'>
            <div className='flex justify-content-space-between motion-content-list-body'>
              <div className='motion-list-item flex-basis-80'>
                <div className='motion-list-body-title'>Penarikan untuk Tanggal Tidak Seragam (Ex.: Tanggal 31 untuk Bulan 30 Hari)</div>
                <div className='parent-hierarchy'>
                  <div className='motion-list-hieararchy'>CRON melakukan penarikan transaksi dan penarikan berikutnya berlangsung mengikuti tanggal penarikan dari user</div>
                </div>
              </div>
              <div className='motion-list-item flex-basis-20 text-align-center'>02 Maret 2023</div>
              <div className='motion-list-item flex-basis-20 text-align-center'>
                <span className="label-status-flat">Untested</span>
              </div>
            </div>
            <div className='flex justify-content-center motion-content-list-body'>
              <Link to='/' className='link-with-icon-radius neutral-variant'>Resume <ArrowRightAltIcon /></Link>
            </div>
          </div>
        </div>
        <div className='block-wrapper motion-paper-wrapper'>
          <div className='flex justify-content-space-between motion-content-paper-wrapper'>
            <div className='motion-list-item flex-basis-40'>
              <div className='motion-list-main-title'>Generate RDN</div>
              <div className='motion-list-main-subtitle'>OA Web Syariah & Simplification</div>
            </div>
            <div className='motion-list-item flex-basis-20 text-align-center'>20 of 20 unit</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>Windows, Android, iOS</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>26 Februari 2023</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>
              <Link to='/' className='link-status-table'>
                <span className="label-status-flat success-mode inline-flex align-items-center">Completed <ArrowRightAltIcon /></span>
              </Link>
            </div>
          </div>
        </div>
        <div className='block-wrapper motion-paper-wrapper'>
          <div className='flex justify-content-space-between motion-content-paper-wrapper'>
            <div className='motion-list-item flex-basis-40'>
              <div className='motion-list-main-title'>Support Site Functionality</div>
              <div className='motion-list-main-subtitle'>SPV Transaction</div>
            </div>
            <div className='motion-list-item flex-basis-20 text-align-center'>13 of 13 unit</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>Support Site</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>06 Februari 2023</div>
            <div className='motion-list-item flex-basis-20 text-align-center'>
              <Link to='/' className='link-status-table'>
                <span className="label-status-flat success-mode inline-flex align-items-center">Completed <ArrowRightAltIcon /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index