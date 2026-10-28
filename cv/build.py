"""Builds public/Łukasz_Chlipała_CV.pdf.

    python3 -m venv .venv && .venv/bin/pip install reportlab
    .venv/bin/python cv/build.py
"""

from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.fonts import addMapping
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, Flowable, Frame, FrameBreak, KeepTogether, PageTemplate, Paragraph, Spacer, Table, TableStyle

ROOT = Path(__file__).parent
OUT = ROOT.parent / "public" / "Łukasz_Chlipała_CV.pdf"

for name, file in {
    "Sans": "Geist_wght_400.ttf",
    "Sans-Medium": "Geist_wght_500.ttf",
    "Sans-Bold": "Geist_wght_600.ttf",
    "Mono": "Geist_Mono_wght_400.ttf",
    "Serif": "Instrument_Serif_ital_0.ttf",
    "Serif-Italic": "Instrument_Serif_ital_1.ttf",
}.items():
    pdfmetrics.registerFont(TTFont(name, str(ROOT / "fonts" / file)))
addMapping("Sans", 1, 0, "Sans-Bold")
addMapping("Sans", 0, 0, "Sans")

INK = HexColor("#1C1814")
MUTED = HexColor("#6E655A")
LINE = HexColor("#DED5C6")
ACCENT = HexColor("#B8461C")
PANEL = HexColor("#F4EEE3")

PAGE_W, PAGE_H = A4
SIDEBAR_W = 190
SIDE_PAD = 22
MAIN_X = SIDEBAR_W + 28
MAIN_W = PAGE_W - MAIN_X - 32
TOP = 34
BOTTOM = 46
PHOTO = 92
HEADER_H = 122

body = ParagraphStyle("body", fontName="Sans", fontSize=8.3, leading=11.3, textColor=INK)
muted = ParagraphStyle("muted", parent=body, textColor=MUTED)
side_title = ParagraphStyle("side_title", fontName="Sans-Medium", fontSize=8.5, leading=11.4, textColor=INK, spaceBefore=5)
side_small = ParagraphStyle("side_small", parent=muted, fontSize=8, leading=11)
role_style = ParagraphStyle("role", fontName="Sans-Bold", fontSize=9.8, leading=12.5, textColor=INK)
date_style = ParagraphStyle("date", fontName="Mono", fontSize=7.4, leading=12.5, textColor=MUTED, alignment=2)
company_style = ParagraphStyle("company", fontName="Sans-Medium", fontSize=8.3, leading=11, textColor=ACCENT, spaceAfter=3)
bullet = ParagraphStyle(
    "bullet", parent=body, leftIndent=10, bulletIndent=1, bulletFontName="Sans-Bold", bulletColor=ACCENT, bulletFontSize=8, spaceAfter=1
)


class SectionLabel(Flowable):
    """Mono label in the accent colour followed by a hairline to the column edge."""

    def __init__(self, text, space_before=10, line_color=LINE):
        super().__init__()
        self.text = text.upper()
        self.space_before = space_before
        self.line_color = line_color

    def wrap(self, avail_w, avail_h):
        self.width = avail_w
        return avail_w, self.space_before + 16

    def draw(self):
        c = self.canv
        y = 6
        c.setFont("Mono", 7.2)
        c.setFillColor(ACCENT)
        c.drawString(0, y, self.text)
        start = c.stringWidth(self.text, "Mono", 7.2) + 7
        c.setStrokeColor(self.line_color)
        c.setLineWidth(0.6)
        c.line(start, y + 2.5, self.width, y + 2.5)


def bullets(items):
    return [Paragraph(item, bullet, bulletText="•") for item in items]


def job(title, company, when, items):
    head = Table([[Paragraph(title, role_style), Paragraph(when, date_style)]], colWidths=[MAIN_W - 92, 92])
    head.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                              ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                              ("VALIGN", (0, 0), (-1, -1), "BOTTOM")]))
    return KeepTogether([Spacer(0, 5), head, Paragraph(company, company_style), *bullets(items)])


def side_section(title):
    return SectionLabel(title, space_before=12, line_color=HexColor("#E3D9C8"))


sidebar = [
    side_section("Contact"),
    Paragraph("+48 609 428 089", body),
    Paragraph("lukasz.chlipala3@gmail.com", body),
    Paragraph("Gdańsk, Poland", body),
    Spacer(0, 4),
    Paragraph('<link href="https://chlipala.dev">chlipala.dev</link>', body),
    Paragraph('<link href="https://www.linkedin.com/in/lchlipala">linkedin.com/in/lchlipala</link>', body),
    Paragraph('<link href="https://github.com/chlip1">github.com/chlip1</link>', body),
    side_section("Education"),
    Paragraph("Gdańsk University of Technology", side_small),
    Paragraph("MSc, Computer Science", side_title),
    Paragraph("2024 – 2026", side_small),
    Paragraph("BEng, Robotics &amp; Automation", side_title),
    Paragraph("2020 – 2024", side_small),
    Paragraph("BSc, IT Management", side_title),
    Paragraph("2021 – 2024", side_small),
    side_section("Skills"),
    Paragraph("Languages", side_title),
    Paragraph("TypeScript, JavaScript, PHP, Python, C++, Java, SQL", side_small),
    Paragraph("Cloud", side_title),
    Paragraph("AWS Lambda, API Gateway, DynamoDB, Cognito, OpenSearch, S3, CloudFront, Fargate, CDK, Serverless", side_small),
    Paragraph("Frontend", side_title),
    Paragraph("React, Next.js, Angular, Tailwind CSS", side_small),
    Paragraph("Backend", side_title),
    Paragraph("Node.js, REST, WebSockets, JSON-RPC, MongoDB, MySQL", side_small),
    Paragraph("Quality &amp; tooling", side_title),
    Paragraph("Jest, Playwright, k6, Docker, GitHub Actions, GitLab CI", side_small),
    side_section("Languages"),
    Paragraph("Polish — native", body),
    Paragraph("English — C1", body),
]

main = [
    Paragraph(
        "Software engineer building serverless backends on AWS and the TypeScript products on top of them. "
        "Four years in production: telecom device management at ADTRAN, UK government services at Kainos "
        "and JoinBee, a SaaS for schools and clubs, built after hours.",
        body,
    ),
    SectionLabel("Experience"),
    job(
        "Software Engineer II",
        "ADTRAN",
        "07.2025 – now",
        [
            "Single-handedly migrated <b>1.3M subscribers</b> (end users) from an existing system to a new microservice, from architecture to cutover.",
            "Built a global search service on <b>OpenSearch</b> that ingests data from many sources into one index, "
            "replacing several separate indexes that were hard to query together.",
            "Built a <b>gateway proxy service</b> that connects to customer devices over a tunnel and renders the "
            "router's own UI directly inside our app.",
        ],
    ),
    job(
        "Associate Software Engineer",
        "Kainos",
        "10.2024 – 06.2025",
        [
            "DVSA MOT service: Images in Garages, attaching vehicle photos to the MOT test. Extended the PHP "
            "frontend and built the serverless TypeScript backend on AWS.",
            "Moved a Java 8 service from EC2 to Docker on <b>Fargate</b>.",
        ],
    ),
    job(
        "Trainee Software Engineer",
        "Kainos",
        "07.2023 – 09.2024",
        [
            "DVLA Import: cut the time to propagate a vehicle import across UK registries "
            "from <b>10 minutes to 2</b>.",
            "Rewrote integration tests of the main MOT API from Behat to Playwright.",
            "Spark Forms: customer satisfaction surveys for UK government websites in Java Spring Boot, Angular and AWS.",
        ],
    ),
    job(
        "Software Engineer",
        "Radmor S.A.",
        "07.2022 – 06.2023",
        [
            "Data transfer between a Python test environment and a C++ server.",
            "Interactive map applications driven by real-time location data of radio stations and links between them.",
        ],
    ),
    SectionLabel("Projects"),
    job(
        "JoinBee",
        "joinbee.pl",
        "2025 – now",
        [
            "Schedule, attendance, payments and public pages for schools, academies and clubs. "
            "TypeScript on AWS Lambda, API Gateway, DynamoDB and Cognito with CDK; React PWA and Next.js.",
        ],
    ),
    job(
        "Creative Development",
        "Tech Lead, team of 4 · creative-development.pl",
        "",
        [
            "Booking and online payments (Stripe) for social services aimed at the elderly. MVP presented to the "
            "Mayor of Zalewo Municipality. Angular, Node.js, AWS.",
        ],
    ),
    job(
        "Team matching platform",
        "Tech Lead · with SWPS University",
        "",
        [
            "Team matching software with a custom personality test, multimedia Likert test and online speed dating "
            "module. React, Node.js, OpenAI API.",
        ],
    ),
]

HIGHLIGHTS = [("1.3M", "subscribers migrated"), ("5× faster", "DVLA vehicle import"), ("4 yrs", "in production")]


def draw_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PANEL)
    canvas.rect(0, 0, SIDEBAR_W, PAGE_H, stroke=0, fill=1)
    canvas.setFillColor(ACCENT)
    canvas.rect(0, PAGE_H - 6, PAGE_W, 6, stroke=0, fill=1)

    cx, cy = SIDEBAR_W / 2, PAGE_H - TOP - PHOTO / 2 - 6
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1.2)
    canvas.circle(cx, cy, PHOTO / 2 + 4, stroke=1, fill=0)
    path = canvas.beginPath()
    path.circle(cx, cy, PHOTO / 2)
    canvas.clipPath(path, stroke=0, fill=0)
    canvas.drawImage(str(ROOT / "photo.jpg"), cx - PHOTO / 2, cy - PHOTO / 2, PHOTO, PHOTO)
    canvas.restoreState()

    canvas.saveState()
    top = PAGE_H - TOP
    canvas.setFillColor(INK)
    canvas.setFont("Serif", 40)
    canvas.drawString(MAIN_X, top - 34, "Łukasz")
    first_w = canvas.stringWidth("Łukasz ", "Serif", 40)
    canvas.setFont("Serif-Italic", 40)
    canvas.drawString(MAIN_X + first_w, top - 34, "Chlipała")
    canvas.setFillColor(ACCENT)
    canvas.setFont("Mono", 7.8)
    canvas.drawString(MAIN_X, top - 52, "SOFTWARE ENGINEER  ·  AWS  ·  TYPESCRIPT")

    box_y, box_h = top - 100, 36
    box_w = MAIN_W / len(HIGHLIGHTS)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.6)
    canvas.line(MAIN_X, box_y + box_h, MAIN_X + MAIN_W, box_y + box_h)
    canvas.line(MAIN_X, box_y, MAIN_X + MAIN_W, box_y)
    for i, (figure, caption) in enumerate(HIGHLIGHTS):
        x = MAIN_X + i * box_w
        if i:
            canvas.line(x, box_y + 6, x, box_y + box_h - 6)
        pad = 10 if i else 0
        canvas.setFillColor(INK)
        canvas.setFont("Serif", 17)
        canvas.drawString(x + pad, box_y + 15, figure)
        canvas.setFillColor(MUTED)
        canvas.setFont("Mono", 6.6)
        canvas.drawString(x + pad, box_y + 6, caption.upper())

    canvas.setFillColor(MUTED)
    canvas.setFont("Sans", 5.2)
    consent = (
        "I agree to the processing of personal data provided in this document for realising the recruitment process "
        "pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement "
        "with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR)."
    )
    text = canvas.beginText(MAIN_X, 30)
    text.setLeading(6.6)
    line = ""
    for word in consent.split():
        candidate = f"{line} {word}".strip()
        if canvas.stringWidth(candidate, "Sans", 5.2) > MAIN_W:
            text.textLine(line)
            line = word
        else:
            line = candidate
    text.textLine(line)
    canvas.drawText(text)
    canvas.restoreState()


no_pad = dict(leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
side_top = PAGE_H - TOP - PHOTO - 22
left = Frame(SIDE_PAD, BOTTOM, SIDEBAR_W - 2 * SIDE_PAD, side_top - BOTTOM, **no_pad)
main_top = PAGE_H - TOP - HEADER_H + 10
right = Frame(MAIN_X, BOTTOM, MAIN_W, main_top - BOTTOM, **no_pad)

doc = BaseDocTemplate(
    str(OUT),
    pagesize=A4,
    title="Łukasz Chlipała — CV",
    author="Łukasz Chlipała",
    pageTemplates=[PageTemplate(frames=[left, right], onPage=draw_page)],
)
doc.build([*sidebar, FrameBreak(), *main])
print(f"{OUT} ({doc.page} page{'s' if doc.page > 1 else ''})")
