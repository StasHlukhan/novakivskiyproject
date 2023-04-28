import React, { useContext, useEffect, useState } from 'react'
import Exhibition from '../../img/Exhibition.png'
import Pagination from '../Pagination/Pagination'
import ArtGalleryList from './ArtGalleryList'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './ArtGallery.css'
import { ThemeContext } from '../../Context/ThemeContext'
const ArtGallery = () => {
  const [currentPage,setCurrentPage] = useState(1)
  const [artsPerPage] = useState(12)
  const [arts,setArts]=useState([{id:1,img:'https://lh3.googleusercontent.com/ih8NN1LUWxMQIJOH8ObmimV24w_oTOA5XWeOkfFRpe61A2v9p9ry0soUGbfHR9GpVxDrHKDMtJ4Lx_Slg4Pc8w3EUef7lE4xYxU5UtMq4dzfQF5Q-H8aSr7t7MeluJmbrQR2XY71q8jA2WRW6T75IDJbtVTm9SN7QaBJZdi3XssfMRIdf7I8VrHdBZMfS8drmOJVqlY5Gyn_KVIG5GUQUCwrV6SZqGK-8zy7DiwjLm8WQ4rBbOBg5Yxx1_5iD16j2-v6nOHKorvdAlwOVpZ3J7TzSiTQkqQderfNNH3JpXk4y6lchuVj8XxbFp83o8Fcf37GwhjgoZNbW-3Q44qO7mHROlUSyClMCuOxijt9F20F5MroiKCLFnWb9wSCNyEYyjO8ZbviugzBKsG5TrDO-0A98NPLd9JIvWxPDlHC4fXeuIsqcZwNdgLWRbQuK_zn2No3gyIQCVv4fXFKPEUZKav4InwLbxQ8Hh01-SyOcdnDaesvrTdNTeKYMUgiJmb0QWv0MFdwsfc7-tZyhumbdYS79ATkFa8o10RjUTKqXVbxx1A3JGkI3SxUxHpYAwbF0kG24Q_qWl0cUCw3HCgTda0VYStTbG9AYIdDz4UY48QZ6X9ZVXByFeuohVzsFl3JzdXfu_oYNFCwYHA2C-wKrtIhWOCjAmf7bcEhs44l0YuNJe8OSZARWJ9kUpfBTLTmpoZ_6sGITGKnTAQeWUsJnOWTYhsFiuLJ7FMGqUG7POeLB7sX9Ni5zC0sHLy6QZuTJ6akq_7vxl7Hf-Oz7-yWHBmRRNEpIzCRLT337efBO_iIA0UFyGdUUJ63x3sr5xAB1FuJYOc8R1e6S_6_EKM-vtAVFDuZ7UaFuftz6kQpBpWCD71bSwR9t1o9gfpmf1EcANJgD59M7GWlcOONeH17W_fKx78Ee1tNG-tdK5ZJ3uqKdAR5w0cj_PNNIo3OSwmB67F9AU7sXQG3au3JgGo6DTm-eCd-pvdnxnTF0_jLIQwgUxtt1lagBEoA=w545-h704-s-no?authuser=0'},
  {id:2,img:'https://lh3.googleusercontent.com/QzwoQfSKb_CxFZTNub9FvQeadGZirCgZuQ7IoObQ2fAudkAVUcHgaXrWLYaa1-WgEQ7biiaa-B3VJy3W7oypjnJj4aa-F2UXxKIijVNro925YfwwEzm9_kUApeWVQle5MDijCwnFwFzCVbrwp9b3Ly0oI4YaaKcu4g6zc8wlyH-U5KjgFZ1DEBePFVvqob9spHAQZjYH2lePVGQSKxYa-lmzNvPJzQD4fmiK_eOAaUlbmbM9MNzIPrFXpw_CREh-Ee_HysmKVhCZI5gBklzDTm6nnmKGuNwFJJtLu1Gw41vAkaFg_fZKPG6iwwE6fRtLkIpEQ6-ZmqKHlSEcynY_Dpmdp-ED5YJP5xovBqCh-VlBJ5lb8yjvEt5wAAMYjd6z8edKS5Gh41MVhLlb1zmW5cLGG0HhPVwIFxdUzAklxqxMZUzjAyjWL9YeQxZgg3cYtEWBd4F5YlvJE_irkmMeU1E6JjP_5r5YnKN_2R4Alsdd1gis2AnBkkCUVZAESE5bcWhBCJLyFlgHDz6EtcARMShkKtTknuZ4LC9u3uXZC9yMwoM-PL9nNjBD2az5OCeXaAoYfkQ62C8UAsHWeq1emw3ocMMrfKn7oz5wXgSiKOeD5NUCwLyJ9OLFhjNj6A8bb00RSmvO2MYlvonRq9zExKtIlg0Z5XcY0Jnm2zRy__IyDNWk7foYu2ktfhYFKfmJm_-MktYgTgnObs0uSV02Zw5RRlVck8Z-M5NuGcqRZT_Ymg8NZO0nHKy5i3o-9Hi2icHR4zvAbOir7nIBXMxFdpkTcWZuBye9LzsRI8-2up7-hVErqJ-xqACgTIoX0sTTPYZxsB0AruK8ntiJzLz01Yga9Ll23cuV1Z_ReYwOpZp_FoZIaUQ3KGxWnOTPX68KFf8NM_eFuRbAknZk0AqMhQMoElzXdRuVZQVwHW7DRgpYus5h8B0jIWz4hyPmQcp5FVIm5y5AgxACduXCQVDnP-q07bSTjhTmjbiTHZ4L6ps7N4d_SW05Z8lm=w395-h558-s-no?authuser=0'},
  {id:3,img:'https://lh3.googleusercontent.com/ofKoGaxar6ESp7mZyvP7vM9cqhZiGQ5OHZsWrqMf0D37nrIsRlQmKe36Xb-APkCWGB1wVeKi-_sEHPfaZYVS1U_6d3EX53ngYM4Ji9Oeimq9gl36vnIjzn0O_dN1BiIPsJmtAwOseKJTm7T-nJopUwnEZ8WertzXpsYjcpxf_aggvPHB-2xyKg25t5lT-aAEoqH49dich6eFj4Gnmg4jjA99hNp5ZpHvifb5GHnBHYNkr2_KTdyhhJMn_k_v5gwcKfYfAsDCsWxQbVV7uouNoEaehguYiDVOmLVn8fJK426e2Q--KOL4X-Pk4cSlAdSyL7O-ln2lZ-4UGhfD8dA8GfUyYI5BcAbQk6eYzF_VYZ6wMGx0A4gVx7pmhfpxXlrhLhfGi61yf4k1z6-dysfXkghyCwb7sTBJOHgYpW1KEGy7WqK1_k1waGEseRzQ2W9InlPb2n00Qdtqz0RHN9JR2m-MYRYoMc_u1pVta5X5abQYfDHKT5CFYB2Mh9DMSVO1cHi-MAeHu1sUqJgXmTHWWcPHxLP5B-r21YxhI3tHE9tuDZegcXLTFq6iVaOLTUzcQLcXDxHXdimqYr0ckxDgqT-60FDUSWf8aIf1w7atO2gvw5A7gwpHn9RdUKmNzrMNetPoyk_6mpJdAvovkctHk1JAWHwWFeP0fkgHRIWx1xpy7_RUikjI1Y0k0IrqUO9A-1qTXTDGs6wt7PJci-E732oPdW9o5O9FusQwxHQqg3y4GTnxyLqPKJAP1CVI_Te5Fs__n1nuzbHaLplZJ2Gmb-V_Uz32lELvnefKx1B1yVwyDdu-SMXRys9tA632HqOyeItCVGVkU9JHfzRhrxgrcXB9m8iDMSyB3IhSU8sIzeGacy6FMha3j-Lp11xHxZCFNmO3W4skU-UekC-FeTxSypT0Lhecqj1gSlOY3ohI8IOrwPNFW6ZH15FF7MtKp0xt9ThZ-8yknwEd-EJB-S2ueFuuSBgqsBzLymvaJvI0RTDtbDpWIlM1wVPp=w406-h558-s-no?authuser=0'},
  {id:4,img:'https://lh3.googleusercontent.com/d0WjMhDjB5mzGzPxbfDjyoprfFGSm6UQX3EdN6McUXOOCdnc81XyHShSkql4DxKh9wxGfrcItkYmMNWj7WGf_O3_mI1WNKHXj53EZ80UjhubhlUQCSAo52WwpVlfCoXP5dilZtB6CBphHkXeTvk_tQDyi5SX7gDcOxfl4Vo2e9Za0oarXNCThQu7jH6MEtqoOEKdfa4VPKT_MPDRzz4mnE4e5bEgKQJA7xobfFhVl3XU2TsyQZCek2wh0Ij_bM-p4m1qttXXtq93n4d2jn94aM0BkvmtwVo4of7tlx9u22VlhSaTjkgHVgqftfUG5p4Of4EFsRcMyM168BdjnFMOA6NpSBQI0O9SOr0zMrL7NxqJuBgqjutSkPoBpFeVv9RsDQ86NCwi1M1X7Ng67INPFJIJ6Z-yDlQdbbfOAuxAKssiNXCa8gsA2tX_ZPeSOJ4qvVfb27bp8MRfyQgeTiOXu0xXR8a8M2_PuqlhZUFRpWbhNNpxUDBoHWFKr_utr7pT_L9KVxVOIoEUhMIsnxls1kqRPRaQfroCXs1FF69vEr55ZlJPba9KM3liKUnzvas_Of-TC_6OgklsNWIk9J8dUxLV1e8OWLK4s06kIKiFLWuQrB6nhYIwl_xhjVzVFDGJMR6SLKXq9lIBBs86eGSTrzl1SIG0544ftVMAdF94BNtdHP_JGxmpUD2b5EYwaLiCxa8-G-OxIvEylmRhWgx9B3peItPE_Qzk3p3Y3nmg78OWDfUEpe4Uf81LvYTi2bIrWAbpEhbBeLelp5Q0GefGEsl3GcPbVeweAXLtx5E4WlXki7LHXXfZKZarE4wIRFd5k-RLobM7OHs73UbtoWFrj8l4TPiQxd_7Ln_ExGPgene7aoBb7PAjkOxxGn2WpuUcxZeK4Ac4CLyNvMxR00E2XgK5MtUw6qRkd6qhR7aQz0QJqdy1n_CR2y5MbEVKoNazEz8gW7dNv4QSSb2TjVqIeOK8pfLnNbWna1qjzW6RGerJdG9OGM6qHdiP=w395-h558-s-no?authuser=0'},
  {id:5,img:'https://lh3.googleusercontent.com/rWmtHTh6iw5GW03KxsurC5RM7SOKJjUH22tKZndV34b5qW2CKu5HtHqidX2XbkqimZY6x0MmFgz4zujH5Em2tO_LzjtHahCJ1Pp-akJBkxfHQXel1WJlMeVeKmxNZDIdsS5bT33dAq1iBhhsT9CIFHq2MHgrRhRZ-HC-RxOYiGC4yjTHqIFi-YvhyLKbzOo24tOr6rmD8bn6sOqohdNQjnF0Ayy4Z2yqn7jpyYXw8upEw6bueKXN8iUs2P0S3WUTi4Jsh6EFnrsSHP9xCWC-DVzEtGlAb2G72Xq1iQQs5RTtxnRLYjjpTJrOTIUDHwCHVZBzxt1g8dQeXC-9xOXFZlxL8XfPrdFKFTUtJQxMCBTG_D7mHvL1N2lDJhtT4piB1yBFGCQ9j7QCXAppflFp852sbej4K5EIfvKAJykM_MtcWeZpgo6cTNadRMydG5MQNlul_8cus-vTpA1_Rhfna1jjlJrf2_S9m40-t2yZqtHj_WkRLGAMEFtyveuDV-d2_7qwNUPDy4hmAmUZxhDH2CohhoBKv80ao-NiJ0qSf1L6nvIitClMbuu5QAsPNTdOXxdzOnTN0J1QjfOEp_JY1fQ2hs-2-HsTa2sqYV0-ZryiJh9bY0wSH-OD_oOI3g1fdQWrhlp-wby_wPjutDY_Wr0fVCPhetBYzcInuv7nFepzS3rLVk05RPKV1smZ9SRQLCIB-PceUQmwcdFjA22ckljPEmmM_J_GeuN4Clt7BPpqy2NN2YLBUja7-0KOtU46D_atH-aHVDDFVBmA-qq09lxBMHvB-KL81i27mF-mGnCf6LHBKviAyoqSV3D7CJ3WZ349C4IGcYpamnGtphqkao06_c_bveGsmGxfbfRAaa92bxWe5XdRcZNbMqx7osT_IsPY6NW_J4xPCKanw_mhOcTchAEKfIxdFDGYCCrKFIIRn4PXDjMZMgyFr4WjUoI2JmusbfCpedVAVHpAyTBlEzmbhOvu97U54IEzftr3GVmb_KN4GMhRpEqX=w395-h558-s-no?authuser=0'},
  {id:6,img:'https://lh3.googleusercontent.com/7zLEkWpVkcOlA9fOW6iQqUTlK5eDGAGaNl9YAk2VFa0buaha68gP6jVv95CNl6ugyIHxFF3nmgt0DVHPUAV41-kohnqM0NiuWnnxAkpLkaMtbw2YyFp2SBUQJYU8CKl284ywg34HHYJhX3c2MbxPm5Bw4Mq9V5VpTVG47y9Uunah4xQWuccqbBATwmrelQnulOpAAD8b7IZzj7SATYPaG8CGSoraZkSqDOjXdcSWPxMm8kiY4bYR_P4LpBxqjJ1c1iLMpq4uq02dRD-6EmeYTYQWpAvPGk2UGDS1_heMP_B3VklfzQBPkwJndOOpnIsStlO2CKaIrzmT44H0k5X4jDNsvDdEKTTcCoCVvU_aj-behD1Wj9DJqpSn7s7D0IQUJoF7FWEWGGIb8wiE60yp1LZKJVQ5LVJMLRuTeXoFaqOd5On08ZRPpnOYWCuahbey_bJprdDN-xpwmznFB9k_FT8pBJvt836qmM0AmPYD7dmep8fOvPsL1vCmvKlpAjdgVaLtMUaY0m687siZ9hrMB4x6aqYbQBiYTeWyJXUYMv_zR2Du9i9Z4Iymnx2PM9ckSmdQAu8f0XFU5sGS3XPvD8B98tQg2JHkDF9U7PQXXJdYhFRZTIr3FmpX5dqp9CthAcbfkNWWTV7kkMnnqNAVlAEncABK8ut1fsqSsWsjwLcT1eYRnThgIEaHVkok3i1K84E6hV_RFsetoaQ7Y1GrPSeS86R7UrVkGxvdIHXa7uKg3qZrewMJbhJzNQ8MZCzYjKX6qZoytX22W6MlyEs7tCgulHRMYMTE4vGsOFEULnPegdOkLwdP1MQzMr9shlI_vANnXkRiN7OuN5DctAacLxRpm0SaUKF7eUMq0_gdrbd3bQypuzthPC_4qqdzECJnD_iN2xIrjlau5gnv15mYUU6uoQ31faRpSHdTeBNEteutsytnbRcbXizpW0Gs1yqss9SpxPjUTp1jV6JMw5AtIbNhjzjeEwJJDYFLMPjyI5qvixd1OYTbei2a=w406-h558-s-no?authuser=0'},
  {id:7,img:'https://lh3.googleusercontent.com/uVk6QvkaFRnzUXiIb4qnLk2yOIhnRyMcHTqucm_E7mcc-oMwNwtaUfen5KBwQhYDltPXfnpc9LaMhQ1g4Ms9wEtimSD7UeaSma7YOvbSiH88DYrmrkbTPoQxAw8eBeXsXwP4D50Tdnl1dekAaxasM3R5IVMBhNNd5Bb6i7OFcwAlZL1n2utfaA8J_TX2orRLJzLs_QNOgtmvn8puseB6xkmc9VFdGUasm4-YH_g3E5ItOTzAG2KFv2YPNwxUKGvLcCg2RrB-uPOJj1-RLNRFAJuf9whHgXVjJnEk-5j6h2NvRMKI7LIujlkQcgUfCZDTdYElZ0ezWQ8acfnAWY_JIRABThikEPHDdaE_POdIGfD2LhZ9jdbsvUYQnlT38Uydl7G617zeJBGraOolJXxqueyzkPrh5y4Idvao69q_aifzjzykhA6g8ecymTPjF4kg6rnxBnILu6f4eUh0tbaTNO6V_ZjxQj5J2UBdSzT0Dav-MjXsTHEoWyBTFlB3ffWq1CJjENd48o-vQdVRwD6t3L2sXLMWsRVbvWSWxnHl5-yeqi2FhSXSvG5S3o1HfRw1VhbcnSoiTieUm5b3Ln7og2r8i3Ku3Heqb31eDgMMIWwzWHEMqKSgC8-lz-OOFBo6-Y1SA_Ij1f3f9j686LTQyChjfABXSYYkY8AVhU2Ze_ylIdvnGwDs_fItyAsBx8DzvH6g-JfjNvtnQkgpdNYpodcziWJH--L7o-2POCGY831QHUIwr9RNApdTslmWG48q85BX5AxIz_JM-zQLqJK7rn4DwsWo3xRO9DvCqJimWFWUdQxKHH9FWYWXHmD4DeGbyumj04sMv_jz-K0GB1GG4ZjApasKocZ_krwmp5n3Nj6kcO4mIyv1Kmu_RnQ95mDahgmh3dI7IjdgM5kolf9n4VWEJ94QKNjmOmflxYYyKFvvFivqNG4k1m-6axFUMIn7ZqHf9hhIo9rY_ehvpIiAg0JXJ1Sy8JtA3JICwpKYUrc1mxiiaeFJT4oy=w395-h559-s-no?authuser=0'},
  {id:8,img:'https://lh3.googleusercontent.com/NUp34PEAkLxhtTaidpUpb45AtYBB3jOcBXgC3I89bONp1xnjVnN5lY6Kh5sR_2J5jH5RScv3sx5rcCANntn-b1ZBwpMyXRcRzUB8-SQOCGCpPRfgppCm4YcxQEideMzuP-kOTjSeYXr_GNLzP7XFu6_9KQX59y5A5LonnYyTb8a4F94u-AQfwwpqjowC5513Mv2LBHQCWuojDUD7uZWg8HjBlrU2alXgRmVevAyfQGwwIxhe4sGFQso0TmZF73UM0b7hyuzSKebv7vDGUxL_ASUh6u-G6-57ZjFG97tbtjYjn5hsv-YixYPGE9ub6dz9_vyp36tweVJFsfuWuByk-CD8yk66X5g_GEtBzbxsdX5iCWB1xW9vikzr30g-1uXJfXUS_PSd2jYY3ub6MtMdyegULiSR2wXsk31c4yn4Hla0JBkOC3Ea_f6xVIzV7dfK1yVV7LgNjay7P6JLavg_f0G-Cc-tg6eat02tabVHtmSupUghZNUoeTQb0rZf__xskrnQqFyum6miexY5dNHeSrO9CqFdrq9DmeyaSatF7IjDtA1xcNIxeyuFhkKUpdAb_6WU5ELfhOvp1VLMvjCy84lEuBsBo4fIEKkA5eRu-cPLNComevx6HLOW5kAAIJAI_cN7E-Sz0Jpm3KsdyiKGpI0J29J0WY2_PsvLNOMQTiPcqZEnVGJ2ShDOkH9bDEf9eCE59Z-61myz8LCnfwuBk4a3nCF9vs_Km4-zP0jp256gtWR5jaZlBSoI0mJO-JFHjb6fL7EdNFPYww2vFi16ECwsV5sks9IWJoh53mODfm0eTMsbXW2EWEXVuARprlLzfTt0x1ruCVMn8RPKZbbdcV8Fz47-yAZyeUtWl2o77q-xq_psOwmPwf0RkgnFfUNOUZnOEdUCJVlWJNreKMqkiK5wPDIpzYefmmJ-VLtyvF1qLyXmaaj99QrdNHozlMyWb16P1lee8f9McZyId0HhT3YHWIZsegB-LgDmq16c7hHO5rW-xnqziSRA=w395-h558-s-no?authuser=0'},
  {id:9,img:'https://lh3.googleusercontent.com/arOgd4-56V0IVMRAuAh1lkhHYT83kgNBuA5IKdyo760P1Om_ZbF-crxgECd4_rj9C3tX2jqvbA9G9smkB4COvN9REpKt_wskADKkdDQ7b6Pejgpn7juYZMbXzJIpBJyEGHudiy-0OEg387At07ekI1fuiPKSm-8EmFOOlOT5vQu664dXlobF4BKXxekMSrsPwwim3oogqCp51WHGMJp1HU-79AO1DLRy3iYV5dRUkef6AcVVHpvS8xoKJj5cvV4w1pvbnzv6mHohHyemQhGaIuXmiczq5ZR8uv0RHpzj4CpJx-W4YvOSPVcptymp4I6p6hZ7CFa84yo-VbcN79s4zBWIcWVFHCCZG94wlvOyvAElr3mndLhbs0-5c3pPSdvjGcONAu-bo1XfuNJK3m7Yxs5r26KsGufxZjXS9FL7UvQFX53VQKA6UqnjmhmjWiwe8e5AxC1VtoEC7mEdLaYs6eSZCCGjaPI4cEl5K0SyrJYiIPkCpxidV-5VLky9DeEIHXhkNQh_MuhYprtnnjXvn8T9ZKijq9IDCbUCTXsFHUJU0Z7o5kQITx5wxkVvnOfKALiRuAdJbk2NTALyouwCSCfGxfo0HQpgICNRq3pdzqYXl9O7d3di7m5LmQAolJ0aNMYb-nt5Sb3Mfv-7NrGaPZETKbjK-bsV_qqbKkKM0ph--yliEG6mhrdNRu5pgXEa8TbB4jXg_esofg5ZAOXpjBNwYULgqp_lrjRZrNV9aL6FNFXsH7fFEGyrU7LaGhSlaWvMsP9auxzdFb0o_zBwvsUltBwZUTqt7WKaeJnLhL64_3a8UnHH4GTJXuHAPs5l4rwsgfrFK0I_w4P_Q_NFHkpbqLygcLkIVA4Kr7CurnIn3GJZ6hUG_pYWw6XtZ-XtFxDV8MHxkxBmCXZWZmHyXHQUdGpDzhoX2Fa7oR2ClCI-oG3O4l-RHhULh79V5gl_XKNwJNszwtKfV7zPrSupRvdrSTFngY5Ym1atWKHsKw2e9gUyJsMePj-P=w396-h558-s-no?authuser=0'},
  {id:10,img:'https://lh3.googleusercontent.com/ysQfen3AMcpjmqJUSzRgNjCeZ2Xb2bOe30GYh02EkWrqmXpXxpPa1eAjnOlyu3CVm1oN1rQpcvqPnE26fYokm-glQpCK69F0q-rgb8utUCddmWflyDti602s44OT4nrKlUfHUwkmnDhLufqsoS_uHktnFdoLAI0rkB8B-F6p7ZWPRJMp20yW3taX3yii8KigYXwXuzvS1zBSOcTpRcn4Ni67Vlx-Ux_nDxTrH1FjcBVmBECoTj3s5Gi0ttkbQ0g2VEdL0j6nkXTgeHY3CyRhntRls74PA5DwtusauuZfhNJObgQJ-RVWXg5mGtzKjGRCTRmoXfVd_D8Nh24hmklhq2g6y1Fcm6A84zXoahSp20uRB78GUdGgK3EILmkG27cT9wH5cIf5DvB7Iha3vPLgUBDqyX1HygkFa0bU0VHh0qlmapK5MLj-Na9HPg1RHYwcAUaEahUDeNlxQRb2fw9nRCKGPR4e_S2RTsdRFYtN_fJ44lVhMOsWIGulrOxM3BZtWcSQ0BkQu_Utkc-5G0L9rkol-zGHHwPJY2Og9sE76I-xCfxZ3Ovj7rLmrkYRGZIHQeIFw_eEQ1dHs_7zGXpSznGciEaxoWJdYtjnKjbhq295TLggT0Qoinzrk6-TFuVAAIsae_5rCvVMq73zJJ2-HroFuzW0-qAuum_7V7WV0ptznfdEE074ZB-3bXkf6y9boW4l63gYhb2l_6B6w-tVyjPCYscNvWmxA1S-LdYRSHh7rY44kN_L8Ev-QCu60nxexKNLqtU6BbsPugHlqlTgTHdGgZEujvAa2LZ1iuYw6inPonD0t5gf9zSMfXIgeQEkLQ38iMkQrCRB1qCXF0cFqQkMstH64ZKy6BF4tNdt-S3g4yR-XHkcRu5ut3p6b5dbc4DdHKfogOKK71u5JzZKIGOjqC4vNnpsnXJQ2ozekfEF0_gIMTuKSrHS0uiBPdoeav4wcmm_aERwsw69DViY1bCB4rLwMBjNb2NyOFwvikfzCRdBbbnRe7Q4=w395-h558-s-no?authuser=0'},
  {id:11,img:'https://lh3.googleusercontent.com/rNMUHbD6xZFM7nJkHBC-yr0ifdUrXOdpRNwZfnExr40QZeTl3mZ3opQFXJd8hdZJxblKU183r0poY2pn4P23qU20JU8xBrdP9UCvrq6tsYakUE7BEcHB9vhrZUh2p9V9xI0q05bCrKB5Xrqfg8r6zjE4nSWM6zGAL6szKHidwvHeXLZRxNQpWTmPfPOvGWMjtwXY9RxCyJN3wyi1AGMTyjWnHo3NftJ064meVDN65ZUAlU33XmlRtwC2U_PjAL23qzqUtXRlQn_7TSyLYIe9GUwCFASGbDDbyE_8yDfwUV_2nyJfPGyIs_ZDDq7ikVwqvfasbxwaBmWeXG9dVuRortkV1BxOOMOyVmmx6up7ea4fU3_15-qZSLMTAn7m8X4RfH9a2_aeirHDbaeCKBQb9-w0seI3AnTeobU-LJY-YsGEzci5BeGR2m99-wvzfs1rvAqMMEzxhtADsqKc2e6EGLA_e0EGVcshMzhfRjLNw_Z4CE1jcXMyYb3rLsNUFiSg8cXrwnHMro5QaOB6vz8Y5kCVcH0-dHsTCZXNs_4lHAZCiePNpXn6NbwPlb9XS23CTsRdEZ897upc8VE83VHXvRjUDtxwOJ2G3dHqqw2lCWAGlQF-WpvmfgRMQw0EwkAeJriKUL9lYOrlmcTW_aNkHggqGJGj0TPRC6XBHWZhVfd5wWrGboK2WXurjfzrnixv0CVyVag9AtscndrveVA6nMQfip9PvljV9bXHbQiYL0IyRB8i-rQZpCmv2-7XqeoAfHz9TMMA4dTD5rmLJNIQCCtjZDJQPwW2ZKX_ZUquAyu8gLnHJpT49KpoyzfTdilgzX6ZqSbpwcdOdqmPWh0wNWUXUvZb4lCBoRH96pxcSJGp45Ae08wFojf_XJib_yNotlxqhtW9EGmfXCzCQI7urIvwhtjZEr2-UDzXyXNSK2Zi_e2CPMQHpdt9xEHClDw6BBSZ4vMhHcSuL9cP4FusIT6xQGG9Ey7Wwg2Y93TeXjP4xTMiHev8cgyU=w395-h558-s-no?authuser=0'},
  {id:12,img:'https://lh3.googleusercontent.com/iNasE7jVv30ZULyfydwYzOscKNEoEUfNYaXA3-NgcrKCTLbEgNdF3JRu3iZIMmGC1k6dK6xFfwTAooF_wGewdVYqdMnEl4haYfati3gFZb-3TJcROrW_t9ZCc9Vm8VUWETpP7ngjS_awjMbqn6LLLd5aGANJMqrMIK8KTseMw9cy2btCXC1qbBH_rg24MPKl_DWh2bBNHQ7gI9G3hh-GUubk5hylqrcVtjCwtwa9GyidW3tnyACN0wLQmTuzdoFApEqAzAygM51s1ce8X3AeohcXeVzLfoBttKfOVOxG22m1NiB871iKqruARBNT3-2I7zeD3NdZJjz-rhWcY_Kwd0FREI-sT-BPgQWIPtGW2e-3Hi9NdIz19oRXPPWMj-4YIsHMM0DwYSsR0m2-T1MPOzNfJ9JMx5C6-kJEMsJ7cVoq6nNXAOuDBaVm2271AbHbJUa9V-gaBl2GPtcrqy-cGZ8h868dg1k6An0dgtru37yko3c3tiEQfo-p-O2vSFt0lYDl8yRoaTiB4WSy49MPcUCtOi2zEGJJdNSRZHUMAqavFOF6W4OHojbed8YSc-jOZ3F6Gqd7MoGtmVRO57UVZER2bs3DvRi75k_I2U4HylrFuttp0VdlC9ET04nuPH6HaDndLeIHfSmw_zMXNKK-O9529BBC8M4CGaMhsjnqAp2ISllqhVd5CwmErBstRsucntvuG3NhO6TkKuxOJB5auHQ56rnPcDD2yO0WwLnT4iqbTkxVBc9R1OLfupNfSk3WdDV8yBTgpOeq_tfvMleSUcFOheIDSFWH_g6p3CZS3-KpfSYzkiQA8IgAflb4aa50XxrWjTqA-tayIGcTO-XcTtOk1LM9XnYZ_LdpiPDHf8xOF2BceLVbKPjztgg4GGZQME2dHLHUogSwKVtUH7bh85cGdqGRkeHBdtpqfVIkk3UHp5YvjRmgp9RCDPthOVtatDJ5UzqLpxcfDh8xSMbhA5BzPn-B1ozLHmvHvBR1dqNiguMeGQ4Fic_u=w377-h533-s-no?authuser=0'},
  {id:13,img:'https://lh3.googleusercontent.com/NrZvocgEqhDt5Z_hqAilJiJ9byRZgQg-0Xmuy6WbE90pimkMCMNJry456wuPVh3irzXojCiHkqVLgoyiVv312oRJq_u9oFsigIVbgq3jwTkeE2aHuA7G0ObVJHtHoZi919vdfe9fKVueGl6sgdaEiM5omJ-W0whoRX8QUJy013R_mQmJQAGAD28mGDAybn2vKfFTLeuUDgK43yCA3f0z0MA8OOLREu9ggvoXlsaTM5EVIVxDsIn56kjTJTgZ-kR46ZwTKcVvChIQTjmou2h9TdjNSxt7IVXivpJ2C3cOVVS8jTlFr4wQhf3WO6n8cvkGPfIjS1eg5NqTZibQ_6yOcvLFCyipC7BUeouk1NYTmIQ56uxmo28tTF2W-AAFf0lkVM5oQ65FhFiMc-118b7D0EanEGyYvlJFOOBxbxTcPowVsiluaxW5u-8eNpVbnNmugwOJSwfkGsHBlhUWQoazm_KSdnJPnUGTexCMqrJjI3gMkBtwFUBh2ZzYMTjGx9P4Qb2fcxnumpBb6t8c3lCraPCM8Z7uYjflrJXm7ofK0LmVfHZukKq0QffjSqqKDdfjSIK-xPcVFAuYdY6TMX1i6oTLNlxyWYHGvCGOF3Om-LrqqP1Y-Fwo6GNySfyN3wFMLc4vI3Yfo3ffjaGYZGRlJzmK8QK3NDy4UzLODXRKA-XLhtj5N2yx7-eBd9JPzdPUKxidiYMsQga5XhL9jAGgwSHjePGq7UvFYz0UIwOLkrNRSySRdB32_FJTMmgddpFQPHPM8ixYvp66mGgeqi8tgs0ffCmnUdBkklh-aNG-oaK9CQ9FCtXjfQlaz5e9p8ZmfBi6jfzsvFsiD9MjfhpmJCZXs0DU43ipWJZGhaJwzBct9fBRnFAaznhQeoRK-EkAN8UAjO8wDfP-G00E5bAVkodJqIWdxvKR04Qt8NFxqOi--AFBsoU5-C9K6r2E9gH-KfqoC54WwIrS97Kg5eZEaxu0-dYLV84nrVVStWP_aDlLe7hsBnuYxyhP=w395-h558-s-no?authuser=0'},
  {id:14,img:'https://lh3.googleusercontent.com/e82wXGwe8vAWC804EqdfD0BwdMj2_0Xnj2wPK_oJgrN9FdYlO1awlf8tax8bQCnvMnWUuaQHklhdeOapaEMLV1ID9Eqa0d0_1wt1JDfSW-5oP5VBRWvsUKLZvwZTYqGUoRaxhDGyKjNjrDjsmnVjfPL0c9RRTCIlpzUDn3BEToNoO4PvUGSbRwOYiDp_q1Vxn3STUVyQeim4R06jU940SVKhjkQ8RPXkhgbZC4ZomZHhjwZCL0tlc4o0TycPU2xyUG1Nrk-xk1c_rKkDwmMaQD8vXxzgz-mcMSLkgATCVjQtdBVDkVCdiY5j2MVIivGcjw_nJfUU5bAv_h44r3WL1OMMU8pXyPDyAf3NHiS3aPUuYDlFw3nxgQE7fU7Knfxun_HbaeGKmHo4p5Uvo7_hhxI1k7wLLGB57bLnq7sxgq14PMCOAKhMRNB5xw-CLO_5EVIAu4gIsKVMqnSNCJ7rCji5aonMTlS7lv0uZ5cvIHlOQF7qRfaBfnfiuCoXnMm9gjacRYmm_KCjbv2425Xzvhj6ie_vR16hsSvCb2IzcwIxd5ILrNLDVfxKQ3mXP2Lpf5Dgi87nIIld-6XqCxI28AawPH6XOXsvh6twxeiW4nxBbNOPNlAZpRZJZP09IyuuRMNRrvpSofed_nA4U2voKglENiVI_6-XAU5t1YWVeXy_Km1U4lCEgvYTzspCwuUZRIsxaKYxr4_De8UGAY7BdTP0Dolg3fAlw-RITd64XRRFu8Cq01bshY7o2s3JbjeoYoUnALl2af-pzSxlPlZrAelyod9yWw8K78mJhuRaCoSnDgaQtcr-ru3M69J1gDS2SJbmMKjLPNbdG7uNsLSqZrmycTatY19DVWLpJqQbqxNseFrt3vQdwfnp61eggxO3epBgYkF0wopKPl_RUO5RN6K3CImmx4uxcBTMzshrX70a94BQ7Xp19RlY3ELsI2z97rnTIndtmh_cq_AiF-7jpkNZf-8DD98ko4C3Gt5wiPqVOKaYIZwzDx3D=w395-h558-s-no?authuser=0'},
  {id:15,img:'https://lh3.googleusercontent.com/8PYgkwitEncTuPccFTWGW3gjH6F3610c1kmZhLpVTPudmN8cvCIG6ePZzPtTFoKaXua9XZEncRpHdCdXSoAoYzmokOQ1fc_EY653hi7FvGw-0ZyrW_U4a4WcJK3YByxX3OkCos3Ho_CBW7FO-kapVS26fNzTYWBE3rb-5xXt0vqDVqPYbLck5M6qDTMyrMekGzTFgpxDneX9mam21YWkSVS4thy0FsG5rh1VESHu6EdpYILNv3JA4mUG-VhcRyVYF3kvJ2TFY-jKo9BHzvMQTScNZ1uka9eAhg6eoxSGgAktWgaCz-QNR-eCUvcHu_EofTOgWlqw6VWWTcgcoJ04Gxly_A8qXZY9KLX20-Nv0PeszbkctMZw1B5wN7uypNcsAYCc7WF2QdnqLsFtPUlpVoN757pO21XCv2D0n-NkTQEGR9f5MSTPnYXg4Z6V8zFegDtGe_GYG3xqnRetNSmM6YTv26feGH5ZK3ygzwuKJGr3Fo_HnaSJhTVb8coIFYaKp_YC2AmoK_0kXJtn3iitaA8xXbeG3qyoOGq0x1LvQFAU2fyM6S4hdSoEJqgWHMBawNP8S1FYX7xF5couPJm_1DhaYHTO-TAUvS8BR2y7rN7AWp2EX74hn1SpY7uc-G0WCQZG4M_YKVUdr5-YIVNnL9jzVTGlufKuW-G_r0A-WTEY4pFc-MqBzjEp0iC73O5EbOUHwkQj6afVhZzgNNIDLZ912mcGk1nprOHtwaVWJTZIKlVc1fjBl4c84VkxORebQZgnZWlmpiVzzYJVUXH7k_bsGsTc3hEJJCjzD49KWgjOPcf2gfhLaS2I6YmbVnvf7DfJQdY1gxmkaEzLyfYDmHq2q4Gk1Z3VUYaUvXhTrbUAQi5pGyTmCAV51RbmBLIERbd5sMYgADv1yf3I4KUBYakQIQsWMpH3P23RIw8MaaGltc3vIxZBKAJiFHUsMtU8CqRS8ofu_VCx5M0MFjRjH5uKUSwcC-mYG7tAVC_ES0rsR6U1RiPQ9btE=w395-h558-s-no?authuser=0'},
  {id:16,img:'https://lh3.googleusercontent.com/7rAMsMzhnLfETyHvRN1IWy72ubjNmA1JXEgeX1hKqKe2qHqMq6zmK8GNB5Q_6fcNRwnaIFxeTTKzR5T7R0lxITxa-jMxiATN0KySXNlqPvnSQemTzzO3AZ0GjO8EWn1GKvq_-cL1y4PM4ZmIbxnozmqBn1Zg076inoKRiLMVogVSpQA7d5XU2sSu7SPNaddHkAqKJF8-kSQaJV_TA_mLfTjFB5fSy3FehN-z0u_CKWkrxmF5ZSlXfteuBUHfnjBtlIVFlc1OZ2mKmp98djmlVQDNk5tSkCf373QFNK7FNEijKoxbul_RKquFyJJ6c7KXb9coU659tqV3SwOzUg-WLut99Ag4Li-3t6sZqkxx8345rn-XfhKKfemil7rXTpbDVxjbO5mtBdQZA0WWGC9d-U4DJ5MCTydMVbVhlTtdjXiKI7DZLxWzEHcVjiM_M8xfZEXvvQXhK-cpcMwzR6ofA2CkffHNIiRt5-sUzsH-DGKua2krYQziAr8vgFEe9hG-vuPmc8heKkZLvRYD99sLGNRpnGpmpi2kmTQX-D5tZh82D52q-7jjpxUOwZAuKYiSP87yiUHF9N4HmjhMaj4Mwl_nc0HOWWDdWstmT-Mpv4VOH2aGmwltAykMixg8oqFVOBEquOuadunpgFH02XcT8aJtlTPY2DaPET3lRCt-A2UAGynsPo_IWXzDslOJQwkIwQiOPgZUft9PB3nvGgxVpmF4pn22fWRp6PF86T7yMYDE3ErLs5Z0WQVhCS4JmUO7Go4X4pgI9vfTuGs2S8IGXhrPkQMmGmXMwfaeelvgbGuyDF-rNBwbqR3xIeFoZGQaprmPZc5Q2FKMguwg4jItmbuXKn7jX2rwrWpiKbTTHTpgu5eqZDwTtyup26VS9VGfYZ7g4fVtLms28yY2L2BdIyWhk491fihfFoqs6qKd4Ra_denUcR6hA8VsMlkGOhCEoVFr5IVm3HnxO7txUqLTWxOHY94FgKhGjPM3KWBlrnrUD7pICcfWe1Mt=w395-h558-s-no?authuser=0'},
  {id:17,img:'https://lh3.googleusercontent.com/P-yuFWp6ggW0PL_bIhHQgNzI0P6nt6oZydTcqM06e5Hb_3aUKqXKzOFGWuJ6CbQY7SHaUm6Q03VBxkzeOTrQY9fP0NBnsyjuesIQC9_fuDDlyXvC2xnAa-jydV2P7KjNbIalHLtEx99UFLkg2cY9dEn7iZv6YhV1IcumxkB2OTD81O5jeS9NO_3qR2msbryhFOx8iM8eH4FGH4D8lq80IhwzR5SmA525Y8z9PKzLKlQtZvpHSMuEyNvyViC5q98BZN9r3b4jdCF9psOfCFfCKczaBtdKw0gj75g3vDYXwk-takGD2LxqFJJzXxbjcynWpis1oaGvKxuaTMsK4z_L_OPK9dlNQrtFxV8cwdswbGyXX1uEmu9zAvJRIDdfQddEzrZbBF0ee9EflYTWzssFxGIW-j8-Nq1zIhwE6WuZPoRTGJsj_vY4xic4F-lliOusJbuPLpBiY6wTJzABfx5H_w2ODTXh0IZ16g0FUrW-waSmCv326ewK6L8bPeCFDqDYUMH6Pk9_pP2zmBGTHBdahfaLrmeW8vfciEn_druewNOfRD3vMDd0o96nFEJ3-Cw47Tou_VJQWohrG0Lz5Zh5NJTOTPYVaaO__1hr1IRkG6g571oSrWQ4ha8WqdWyBddrH6iw_tW7j7EEqQWwxmJRTpDOLCdwPgGN7_V7VxIzUfsK9_a1s_paFzucuQL7eVV9lIUr0QY3C-UXvlDSsHWS0vsDfe3xK9UBQAU-fvdzGUWVGKG7wxTx3UjmuoqY6V2S3Yks7vzGDDTVoP7d3r2Zu53HTZ8ie-dmqZHmb3UHHrEFTd8Go5t3q2SC_DWIp9x30De9RVIcFj6grr1kQBiWvEDf3Txz1FwnVWnVk9V_XZw4GpWtfq05a3rD-dqNI34phDfsj1MouaATn2ghvjantWHUf7KH3kSzoKAhWr5KHONd6HeygmoVatGiPxzL4gkY_v0SnIAzPUblfedFEerPMhtgNL3zRdNiDWgzoL90yIDeJn1uIrzP9-AG=w395-h558-s-no?authuser=0'},
  {id:18,img:'https://lh3.googleusercontent.com/ulMDgEek7CmmMjuAr0hM6RVEgKeBzHiTs8sEYUSRwB0Qler303uPNBFGxSJAnhTPRgxdtuh4-fHnNJ2upd2cmvq30ZPaCN3pzTpr7idEx_hLiPwwmaTC4ZuMVw5Qdwh4CvhVcx2wiIkmBGlB39dsOrI38H_HHYVl9CyN2pXR8K3jCHzq9FN17hWHMbSeQYcGR5Epkrouvwy39mG3ZG26sP6Ic95-Dj4KXkiiFfvB4oUFbWEFkX1186NWdAMS9ktx-85slBpCJBWWd0YJu7T14eUeQ-ZLbRpRSalwOMom7XZLrwNOj-rV3JrInSV6XyShnZinLkxhxMhSBjwRm-_Uc6rNQ6W79E_CB8IAc40mMegM9saQGJBuS121zdcsC0JhIRXE2W0UXa6z0dFLVL7ugJeVWhIpQJLGF_h5LkKK34l8YAfqF36fZd6d-Mvq1PjrTU4ODfrcHTVssRXRX0965j0cfBSJ9yhmQBiuF6QuYoj76CMM8UPzCZygbKuLOPJHe5E1mP76JlFu9Zkjy35yCd_X9UbYyv7BPxSyZiIK0q1HeutfFA7ULgbX4l3QpNiI84iZQo8894-Bip713FS0X9QjrqZQMIGQdQXI3WY1G5MFVnuFISFGwHQTdRWaSn5dW7WGZwcCeXroB9qaFSYycQKi5N_K3x9mSh4q2yIX8wMY8XHam8jjDZ0sBLv76RxHpcJy2Gs8_c16dJa-rgPm0w2DIC9wRhPeUj0PdVQS-fUPf8L6-QUkGeh_CBSe-gnvvLOnm3BK7EUPPZRn0pE9yh4NJ9AwPDlpEqybPtZkVhAWxrEDzsNYnEQZDYoDIbryxrcnRfTdKPma3pK7A2mdbbZylST8aW_OsmLLrmAW8b8y8h-1jYLnVnUbdhFs2KdjUUgGKfULgUycwoYVa6G8fSrQ10Eihz-nAnlGTz4OO-SQD6YfpMxuz5pTtX16ZOjQOU5rtbrkh57BqGNkF4pMekcXK3UoJW5_KhJXpTFxtyoqzhTuRmVIK4Qp=w395-h558-s-no?authuser=0'},
  {id:19,img:'https://lh3.googleusercontent.com/_JmqV01Kr-QQ81IjAjtRo0GX-d0xZ1bGL35Q9pVeW5GBtZMhYuKIltgKTXUO3eX_DisbS7cIs0jPtAgjvCxafkgWddCGYoyqAW2C9mVSheN6lQUXbE8V-e3PxJRO752jRtbZvHv3tsIyBpPyLSZeasD69LCfoPVdcGYnvGY0t1ZT8IId0I9my0hrvykqQfpJqx7m0mQ31d7HzyT2BVaYt2aFfUo7dtjvWT1ecIg2XveCyUKG-KS8ct7X_axTRpomYoRFzPesieqGEvMZKtSkkkyKZ_oocdNTMumhwUZsGCNMBQnZUGrJMCcZrvJBYIoolnj2xcaRKqBAo-J-x3pU_pqroBQqQpZy9rtnPdOqC7wNFD_lI0GU8doCbQVp5FPpXzunlZH3OQ8xuCoFmZhoQnaLXIlAYdJQjOE_fnrKV9i9aSjshU5N6tec9bNdYu2yQjM8xj9inTGcGeDkD7woRpZdKUg8CtZdOJWgXTZaRQzCzdtGQ738cqCFHCSu84it6ZFAIh3ChO3GtqOmyE2eiyAdD29NOLjse8sB8wiJA_2vvBMU1YtONoiradZdpPKjMiouWhbqHdi_1mnf9vqYcEKkRszmz3gMtcQeZCoB2V1fovmMCRLdfr80dtTWIYhARlhJA6uPoiCAYnLyz5dc3mpujLN-ZeMFKT8pJYg-fdp91pARpgjnx_WtSC-oDmDHVzOAcHxIp5JFh7ogM9s6WUXcEGbhaR1n9R4FRUiYFlUMLWpQd0-lqRKbBxHHTu77Af9cT0bBRbG9krntSnMjrIMPiJWxconsxqSu9AS5zGyvlq4tOKuld1c_4RrtEC21C9d4atEjKJ9QfS46WptCIDddVvUE7FoRIVlFMd_MC10ryX57ingswV_c5b0FJVdv5vpZXraJGukmsBSUmEk2NF3FF5W-Q5QbtxW80Za4z7pOWH3PoUPFRLon48NHvExfwLzDYxKzhcJil1I4srNR7iy5YxgAiilTFraRXzr43YZatY4FT5DcweDk=w395-h558-s-no?authuser=0'},
  {id:20,img:'https://lh3.googleusercontent.com/uQCiZkNVsonKJPd0F0JFcXlXhSYQPY_vy8XYmeSx3IbhMkC8WGZM_mVgTCp83UnmZ7XRND5zIBDlDT8NPKOXxBddW5WSTyAe0ulQrVu91ttNx7FWnNVQ7g0FkZ0T9rJiJqZtykcK5umheo2nMPGSVgRNoHaZ5vNrDuV43Wn1nc4JfDR-wKsr3VET19SCa8Dccr-5R13XAHgP2-SFiKRrKxup5K1RitE4KxySnfa3i47r3vwmMeKuIvGM_Pvv2RGL_xj-eQQ_greuE8uZRuswxH5hBovvjNbudKUHL0vjfCs-dbr43debgYqRe6mVVI0aWNtUr-J3T8KchhJ6jv4efZo3EGGgHmh4Pgo9RfPobX8dvfaB-oJWymy5d_V6sCGqhA_hrLi3VqALuV8544p82bV4e3hpUIGnNmhgDEsyys8f2aSPt9neeQTYFuXfjmENrtx8dXqOwBTQzmNxflEmTV4-sTyEwleFkCISfhxBIJLo_36Lq-KR5kAxYjesixonFPqCDRlicsAarnv6XgYBGh8RkNEaRaSRmlOKkpmXZKl90dG_ezt8WC1PcJ_L3b4wBPbwTVNJMkm9WP0A_xQ9JCtWvqO5CG4HOkl0jGD9eOo6IiHC8FnlVA3HVaxYgoAvUc9bcGKwlSWEt2WnT1ptKjVJbCn5Ioi_Asf-3gykvZU1ZR4aJ2q2k0Jbpng7eHuULrf0js910omP4Mm68ERzQdIKbVD71BDNJQseopWVhKsykyNBNw3mO4vXAV2BzMOX6YcbxzEL6ma7BBpVJPRCYpAf6EIU76fn_mAeTOzordzolFHUYbP2O-DHboGiajhxGggD41uHPQ_nfyGoz3tXFowkWAsp-hj2KLRF-7Z_QZAzPse4lEt-yT0fj7ojZkBckQr_Rbn6RYRogrnIdz4kSFIf5obUo3rZ_nJ8NBXJ2BzvHutAvOXPPpkuxpPl6zAtmvbu_0b5o2R3tvi7bZzcCXR9bfNn8k_N4MBlnBl3sNCXzbeOKbvgkkpv=w395-h558-s-no?authuser=0'},
  {id:21,img:'https://lh3.googleusercontent.com/YDzUoBZBytOXYs5n24dBrDf-lVx6m9kB0vHhV7GNO9VVne5d5Ui_MxF5i-98ITZoSthPwYnQJrAn039P8yPpbFhhjmSY09MHo0guiQNprFEO62CH5HeYK_M1L_4WRGu_M4tsiPtujENPuGsq6Mjd1O1R4MFmmCik3WQUzXuZB-whhwAuO0o5oF9tCi03hGykQKxmNVT1cBm5s_UNY1EXqlAu4aNux7Mgz60ztAvLMnDtpA55w3ZmpE1BrThBlWEaJYKML5mp2KwYmp8cH3nWJRiZEzH0MBPX-HQUW03qcEIombh8UkiRlJ159joKq5u0GSazPMu6YChp9oS5N5jnDwLowgPLFQnUOwHYizvDjZgfheP6a81outx64vfAj3oPULTERaMHt7e_4gNVZFYpwXnGN6GDUPta1GpB42jQYqhJLoGejSCnbQU7UXvkfpOPuLL0K-jB--KIiElbjL480w8QkVwUS6fuumh7eUJCLYJ4fst9BAP4oCMpnk4gH4kqxuA8hyRcP7Gybq04Od1NQNdAT7wNa7nYaZvLIevE0tSRk9-cQ7xWMGE4xv8Rh3fqqV90sGwl3LLYOZxTRhjKOgl4TXAc5qZP9mM5vJczA2-2D1SS_ZUFG-5KbGK9RVUGDFVU78dDKYugj4F_geA5yFGfUYSuZWH-YyCzMNFcpz7imNHBy7R2Bccw79f7z3c8SVloUadUXOOZO4OD3ZsMH1A1nhD4UIx9j_9rHlD9Q5dXG8C-wALdSiNAY_F3ZDt8WJ-GFn8_AW2tMN4u5S9TFfKREgaLHZfkHzdcDlaNMi9UUZVoPECsL_Jd9VwT_4esJ20W6cyklsdG--BEN4ieJC5_zEcGTHoVod8fWyR4YPpUmBnfHddDAT1ss72WQY8UIXbWypO-VJ2ScMVfJ-uo1s4XYwyfUt8zMIgmF8ZE_7-J7T0tJH--G6S8Yp5K_B7CZH0QrSVzorYqokoOG5GDHjykV_9I2Ifn_A3eTo53L2X17rPV7QAAxLDM=w395-h558-s-no?authuser=0'},

])
const [active,setActive]= useState(false)
useEffect(()=>{
  window.scrollTo(0,0);
})
  const lastArtIndex = currentPage * artsPerPage
  const firstArtIndex = lastArtIndex - artsPerPage
  const currentArt = arts.slice(firstArtIndex,lastArtIndex)
    const paginate = pageNumber => {
      setCurrentPage(pageNumber)
      setActive(pageNumber)
      window.scrollTo({ behavior: 'smooth', top: 0 })
    }

     const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  const {darkMode} = useContext(ThemeContext)
  return (
    
    <div>
      
      <div className={darkMode ? "art_gallery dark-mode" : "art_gallery"} >
      
        <div  className="art_gallery_info">
          <h2>Арт галерея</h2>
          <ArtGalleryList arts={currentArt} handleClick={handleClick} ></ArtGalleryList>
          {selectedImage && (
          <div className="modal_overlay" onClick={handleClose}>
            <div className="modall">
              <img src={selectedImage.img} alt={selectedImage.alt} />
            </div>
          </div>
            )}
            <Pagination active={active}  paginate={paginate} totalArts={arts.length} artsPerPage={artsPerPage} ></Pagination>
        </div>
      </div>
      
    </div>
  )
}


 

export default ArtGallery