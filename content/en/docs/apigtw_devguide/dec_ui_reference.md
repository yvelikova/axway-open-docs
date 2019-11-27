{
"title": "Declarative UI reference",
"linkTitle": "Declarative UI reference",
"date": "2019-11-27",
"description": "This appendix provides in-depth details about declarative XML, which is used in API Gateway to define the user interface of filters and dialogs within Policy Studio."
}
﻿

This appendix provides in-depth details about declarative XML, which is used in API Gateway to define the user interface of filters and dialogs within Policy Studio.

Declarative XML overview
------------------------

Declarative XML is a user interface markup language defining UI elements and bindings that allows you to quickly create dialogs within Policy Studio with minimal coding.

The defined elements map to Eclipse Standard Widget Toolkit (SWT) widgets and Axway ScreenAttributes (groups of SWT widgets backed by entity instances).

This topic describes in detail the UI elements and bindings.

Element quick reference
-----------------------

The following table contains the available elements (in alphabetical order):

| Element name                                                                 | Example                                                               |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [ActorAttribute](dec_ui_elements_atoc.htm#id.dz5lm8vhy5m6)                   | ![ActorAttribute](/Images/APIGatewayDeveloperGuide/02000002.jpg)      |
| [AgeAttribute](dec_ui_elements_atoc.htm#id.2k9a10mbclsh)                     |                                                                       |
| [AuthNRepositoryAttribute](dec_ui_elements_atoc.htm#id.77hv4yaa2yjh)         |                                                                       |
| [binding](dec_ui_elements_atoc.htm#id.ngjs08mzajct)                          |                                                                       |
| [BitMaskAttribute](dec_ui_elements_atoc.htm#id.fgm2yua1nkhp)                 | ![BitMaskAttribute](/Images/APIGatewayDeveloperGuide/02000003.jpg)    |
| [Button](dec_ui_elements_atoc.htm#id.ijicspjks9qn)                           | ![Button](/Images/APIGatewayDeveloperGuide/02000005.jpg)              |
| [ButtonAttribute](dec_ui_elements_atoc.htm#id.ap22hej5pm60)                  | ![ButtonAttribute](/Images/APIGatewayDeveloperGuide/02000004.jpg)     |
| [CategoryAttribute](dec_ui_elements_atoc.htm#id.53ydd6dykc11)                |                                                                       |
| [CertDNameAttribute](dec_ui_elements_atoc.htm#id.oqejnm4nb8s8)               |                                                                       |
| [certSelector](dec_ui_elements_atoc.htm#id.nbe6bp8v3iew)                     |                                                                       |
| [CertTreeAttribute](dec_ui_elements_atoc.htm#h.3d9nu19mksin)                 |                                                                       |
| [CheckboxGroupAttribute](dec_ui_elements_atoc.htm#Checkbox)                  |                                                                       |
| [CircuitChainTable](dec_ui_elements_atoc.htm#id.3dcunse7z00k)                |                                                                       |
| [ComboAttribute](dec_ui_elements_atoc.htm#id.bva2feegw5dz)                   | ![ComboAttribute](/Images/APIGatewayDeveloperGuide/02000006.jpg)      |
| [ComboBinding](dec_ui_elements_atoc.htm#id.korizhdpk7q)                      |                                                                       |
| [ComboStackPanel](dec_ui_elements_atoc.htm#id.c4acb7f9mgye)                  | ![ComboStackPanel](/Images/APIGatewayDeveloperGuide/02000007.jpg)     |
| [condition](dec_ui_elements_atoc.htm#id.96xa1lgdztss)                        |                                                                       |
| [ContentEncodingAttribute](dec_ui_elements_atoc.htm#id.6a60dzsg1vvt)         |                                                                       |
| [CronAttribute](dec_ui_elements_atoc.htm#id.ughec9t8ian9)                    |                                                                       |
| [DirectoryChooser](dec_ui_elements_dtom.htm#id.oaiby0d3raz3)                 | ![DirectoryChooser](/Images/APIGatewayDeveloperGuide/02000008.jpg)    |
| [ESPKReferenceSummaryAttribute](dec_ui_elements_dtom.htm#id.vahk36qfannz)    |                                                                       |
| [FieldTable](dec_ui_elements_dtom.htm#id.cl99zzhcj9nl)                       | ![FieldTable](/Images/APIGatewayDeveloperGuide/02000009.jpg)          |
| [FileChooserText](dec_ui_elements_dtom.htm#id.jaj5zx2afkff)                  | ![FileChooserText](/Images/APIGatewayDeveloperGuide/0200000A.jpg)     |
| [group](dec_ui_elements_dtom.htm#id.rkhglm2nc4uc)                            | ![group](/Images/APIGatewayDeveloperGuide/0200000B.jpg)               |
| [HTTPStatusTableAttribute](dec_ui_elements_dtom.htm#id.f8ka4xpnhfa4)         |                                                                       |
| [include](dec_ui_elements_dtom.htm#id.ye0xqa3471s9)                          |                                                                       |
| [label](dec_ui_elements_dtom.htm#id.ajcbkbr6t4ql)                            | ![label](/Images/APIGatewayDeveloperGuide/0200000C.jpg)               |
| [LifeTimeAttribute](dec_ui_elements_dtom.htm#id.nzjacplaqwic)                | ![LifeTimeAttribute](/Images/APIGatewayDeveloperGuide/0200000D.jpg)   |
| [MsgAttrAttribute](dec_ui_elements_dtom.htm#id.tuhe7vg9nq81)                 | ![MsgAttrAttribute](/Images/APIGatewayDeveloperGuide/0200000E.jpg)    |
| [MultiValueTextAttribute](dec_ui_elements_dtom.htm#id.h8ajs5pqnzgn)          |                                                                       |
| NameAttribute                                                                | ![NameAttribute](/Images/APIGatewayDeveloperGuide/0200000F.jpg)       |
| [NumberAttribute](dec_ui_elements_ntos.htm#id.276qzoxr6bp5)                  | ![NumberAttribute](/Images/APIGatewayDeveloperGuide/02000010.jpg)     |
| [panel](dec_ui_elements_ntos.htm#id.esvivgtrdj2f)                            |                                                                       |
| [PasswordAttribute](dec_ui_elements_ntos.htm#id.m1k59dccvlmf)                | ![PasswordAttribute](/Images/APIGatewayDeveloperGuide/02000011.jpg)   |
| [RadioGroupAttribute](dec_ui_elements_ntos.htm#id.c1tkrmxh1v9f)              | ![RadioGroupAttribute](/Images/APIGatewayDeveloperGuide/02000012.jpg) |
| [ReferenceSelector](dec_ui_elements_ntos.htm#id.nra9ofdvt9or)                | ![ReferenceSelector](/Images/APIGatewayDeveloperGuide/02000013.jpg)   |
| [SamlAttribute](dec_ui_elements_ntos.htm#id.l427o3c1cjie)                    |                                                                       |
| [SamlSubjectConfirmationAttribute](dec_ui_elements_ntos.htm#id.mdr6dwr86c5i) |                                                                       |
| [scrollpanel](dec_ui_elements_ntos.htm#id.snck573c4r2n)                      | ![scrollpanel](/Images/APIGatewayDeveloperGuide/02000014.jpg)         |
| [section](dec_ui_elements_ntos.htm#id.t6gxm7dck29h)                          | ![section](/Images/APIGatewayDeveloperGuide/02000015.jpg)             |
| [SigningKeyAttribute](dec_ui_elements_ntos.htm#id.7f03eueyi61k)              |                                                                       |
| [SizeAttribute](dec_ui_elements_ntos.htm#id.18g44boix9ae)                    |                                                                       |
| [SoftRefListAttribute](dec_ui_elements_ntos.htm#id.dwlc18syz9d3)             |                                                                       |
| [SoftRefTreeAttribute](dec_ui_elements_ntos.htm#h.u8zep76mymmk)              |                                                                       |
| [SpinAttribute](dec_ui_elements_ntos.htm#id.93iwvy3hlppa)                    | ![SpinAttribute](/Images/APIGatewayDeveloperGuide/02000016.jpg)       |
| [tab](dec_ui_elements_ttoz.htm#id.xxcbwl9g4w9a)                              | ![tab](/Images/APIGatewayDeveloperGuide/02000017.jpg)                 |
| [tabFolder](dec_ui_elements_ttoz.htm#id.t0wcmx8dovhv)                        | ![tabFolder](/Images/APIGatewayDeveloperGuide/02000018.jpg)           |
| [TablePage](dec_ui_elements_ttoz.htm#id.mn8npoebcqae)                        | ![TablePage](/Images/APIGatewayDeveloperGuide/02000019.jpg)           |
| [text](dec_ui_elements_ttoz.htm#id.uxudw4sdghqt)                             |                                                                       |
| [TextAttribute](dec_ui_elements_ttoz.htm#id.4q3r3oaatywd)                    | ![TextAttribute](/Images/APIGatewayDeveloperGuide/0200001A.jpg)       |
| [ui](dec_ui_elements_ttoz.htm#id.hizqn2mbmw5c)                               |                                                                       |
| [validator](dec_ui_elements_ttoz.htm#id.jz5u01weds3)                         |                                                                       |
| [XPathAttribute](dec_ui_elements_ttoz.htm#id.xd18jkcszcfc)                   |                                                                       |

The following sections detail the elements, including the available attributes.

{{< alert title="Note" color="primary" >}}In the listing of available attributes for each element, the attributes are identified as mandatory (M), optional (O), or conditional (C).{{< /alert >}}
