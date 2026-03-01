#!/usr/bin/env python3
"""
HSIL Hackathon 2026 — Taiwan Hub
Masterful storytelling presentation (12 slides)
+ Speech notes file
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from lxml import etree
import os

# ── Constants ───────────────────────────────────────────
CRIMSON      = RGBColor(0xA8, 0x1D, 0x35)
TEAL         = RGBColor(0x0D, 0x9B, 0x76)
GOLD         = RGBColor(0xD4, 0x8B, 0x0C)
DARK         = RGBColor(0x1A, 0x20, 0x2E)
DARKER       = RGBColor(0x0F, 0x13, 0x1A)
WHITE        = RGBColor(0xFF, 0xFF, 0xFF)
LIGHT_GRAY   = RGBColor(0xF1, 0xF5, 0xF9)
MED_GRAY     = RGBColor(0x94, 0xA3, 0xB8)
DIM_WHITE    = RGBColor(0xCC, 0xCC, 0xCC)
CARD_DARK    = RGBColor(0x1E, 0x25, 0x33)
CARD_DARKER  = RGBColor(0x16, 0x1C, 0x28)

ASSETS = "/home/user/HSIL-Website/src/assets"
NSMAP = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}

prs = Presentation()
prs.slide_width  = Inches(13.333)
prs.slide_height = Inches(7.5)

TOTAL = 12

# ── Helpers ─────────────────────────────────────────────
def bg(slide, color):
    slide.background.fill.solid()
    slide.background.fill.fore_color.rgb = color

def shape(slide, shape_type, l, t, w, h, fill=None, line=False):
    s = slide.shapes.add_shape(shape_type, l, t, w, h)
    if fill:
        s.fill.solid()
        s.fill.fore_color.rgb = fill
    else:
        s.fill.background()
    if not line:
        s.line.fill.background()
    return s

def rr(slide, l, t, w, h, fill):
    return shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, l, t, w, h, fill)

def rect(slide, l, t, w, h, fill):
    return shape(slide, MSO_SHAPE.RECTANGLE, l, t, w, h, fill)

def tb(slide, l, t, w, h, text, sz=18, clr=DARK, bold=False, align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP):
    box = slide.shapes.add_textbox(l, t, w, h)
    tf = box.text_frame
    tf.word_wrap = True
    tf.auto_size = None
    try:
        tf.vertical_anchor = anchor
    except:
        pass
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(sz)
    p.font.color.rgb = clr
    p.font.bold = bold
    p.font.name = "Calibri"
    p.alignment = align
    return box

def multi_tb(slide, l, t, w, h, lines, default_sz=18, default_clr=DARK):
    """lines = list of (text, size, color, bold, align) or just text"""
    box = slide.shapes.add_textbox(l, t, w, h)
    tf = box.text_frame
    tf.word_wrap = True
    for i, item in enumerate(lines):
        if isinstance(item, str):
            txt, sz, clr, bld, al = item, default_sz, default_clr, False, PP_ALIGN.LEFT
        else:
            txt = item[0]
            sz = item[1] if len(item) > 1 else default_sz
            clr = item[2] if len(item) > 2 else default_clr
            bld = item[3] if len(item) > 3 else False
            al = item[4] if len(item) > 4 else PP_ALIGN.LEFT
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.text = txt
        p.font.size = Pt(sz)
        p.font.color.rgb = clr
        p.font.bold = bld
        p.font.name = "Calibri"
        p.alignment = al
        p.space_before = Pt(0) if i == 0 else Pt(6)
    return box

def slide_num(slide, n):
    tb(slide, Inches(12.3), Inches(7.1), Inches(0.9), Inches(0.3),
       f"{n}/{TOTAL}", sz=10, clr=MED_GRAY, align=PP_ALIGN.RIGHT)

def accent_bar(slide, l, t, w, clr=TEAL):
    rect(slide, l, t, w, Pt(4), clr)

def dark_slide_template(slide):
    """Common dark slide with subtle side accent"""
    bg(slide, DARK)
    rect(slide, Inches(0), Inches(0), Inches(0.06), Inches(7.5), CRIMSON)

def light_slide_template(slide):
    bg(slide, WHITE)
    rect(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), CRIMSON)


# ══════════════════════════════════════════════════════════
# SLIDE 1 — COVER: The Hook
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARKER)

# Side accents
rect(s, Inches(0), Inches(0), Inches(0.35), Inches(7.5), CRIMSON)
rect(s, Inches(0.35), Inches(0), Inches(0.08), Inches(7.5), TEAL)

# Subtle corner decoration
shape(s, MSO_SHAPE.RIGHT_TRIANGLE, Inches(10.5), Inches(0), Inches(2.833), Inches(2.5), RGBColor(0x1E, 0x25, 0x33))

# Logo
try:
    s.shapes.add_picture(os.path.join(ASSETS, "hsil-logo.png"),
                         Inches(1.0), Inches(0.6), height=Inches(0.9))
except: pass

# Top label
tb(s, Inches(1.0), Inches(1.8), Inches(10), Inches(0.4),
   "HARVARD T.H. CHAN SCHOOL OF PUBLIC HEALTH", sz=12, clr=MED_GRAY, bold=True)

# Main title
tb(s, Inches(1.0), Inches(2.4), Inches(10), Inches(1.5),
   "HSIL Hackathon 2026", sz=54, clr=WHITE, bold=True)

tb(s, Inches(1.0), Inches(3.8), Inches(10), Inches(0.8),
   "Taiwan Hub  ·  全球健康創新黑客松", sz=30, clr=TEAL, bold=True)

accent_bar(s, Inches(1.0), Inches(4.8), Inches(4), GOLD)

# Theme
tb(s, Inches(1.0), Inches(5.15), Inches(10), Inches(0.5),
   "Building High-Value Health Systems: Leveraging AI", sz=18, clr=GOLD)

# Coordinator
tb(s, Inches(1.0), Inches(5.9), Inches(10), Inches(0.4),
   "Chuehan Kuo", sz=20, clr=WHITE, bold=True)
tb(s, Inches(1.0), Inches(6.3), Inches(10), Inches(0.4),
   "Founder & Lead Coordinator, Taiwan Hub", sz=14, clr=MED_GRAY)

# Date/location
tb(s, Inches(1.0), Inches(6.8), Inches(10), Inches(0.4),
   "April 10–11, 2026  ·  National Taiwan University", sz=13, clr=MED_GRAY)

slide_num(s, 1)


# ══════════════════════════════════════════════════════════
# SLIDE 2 — THE PROBLEM: Healthcare is Broken
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARKER)
rect(s, Inches(0), Inches(0), Inches(0.06), Inches(7.5), CRIMSON)

# Big number — center impact
tb(s, Inches(0.5), Inches(0.8), Inches(12.3), Inches(1.2),
   "Every year, 5 million people die", sz=44, clr=WHITE, bold=True, align=PP_ALIGN.CENTER)

tb(s, Inches(0.5), Inches(2.0), Inches(12.3), Inches(0.8),
   "from poor-quality healthcare in low & middle-income countries.", sz=28, clr=MED_GRAY, align=PP_ALIGN.CENTER)

accent_bar(s, Inches(5.5), Inches(3.2), Inches(2.3), CRIMSON)

# Supporting stats in cards
stats = [
    ("$8.6 Trillion", "spent globally on health\neach year — much of it wasted"),
    ("70%", "of healthcare costs could be\nreduced with better systems"),
    ("AI", "has the potential to transform\nhow we deliver care"),
]

for i, (big, detail) in enumerate(stats):
    x = Inches(0.8) + i * Inches(4.2)
    y = Inches(3.8)
    card = rr(s, x, y, Inches(3.8), Inches(2.5), CARD_DARK)

    tb(s, x + Inches(0.4), y + Inches(0.4), Inches(3), Inches(0.8),
       big, sz=36, clr=GOLD, bold=True)

    box = s.shapes.add_textbox(x + Inches(0.4), y + Inches(1.3), Inches(3), Inches(1.0))
    tf = box.text_frame
    tf.word_wrap = True
    for j, line in enumerate(detail.split('\n')):
        p = tf.paragraphs[0] if j == 0 else tf.add_paragraph()
        p.text = line
        p.font.size = Pt(16)
        p.font.color.rgb = DIM_WHITE
        p.font.name = "Calibri"

slide_num(s, 2)


# ══════════════════════════════════════════════════════════
# SLIDE 3 — THE QUESTION: What If You Could Fix It?
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARK)
rect(s, Inches(0), Inches(0), Inches(0.06), Inches(7.5), TEAL)

# One powerful question — dead center
tb(s, Inches(1), Inches(2.0), Inches(11.3), Inches(1.2),
   "What if you could help fix it?", sz=52, clr=WHITE, bold=True, align=PP_ALIGN.CENTER)

accent_bar(s, Inches(5.5), Inches(3.5), Inches(2.3), TEAL)

tb(s, Inches(1.5), Inches(4.2), Inches(10.3), Inches(0.6),
   "What if all you needed was an idea, a team, and 2 days?", sz=24, clr=TEAL, align=PP_ALIGN.CENTER)

tb(s, Inches(1.5), Inches(5.2), Inches(10.3), Inches(0.5),
   "No coding required.  No medical degree needed.  Just your creativity.",
   sz=18, clr=MED_GRAY, align=PP_ALIGN.CENTER)

slide_num(s, 3)


# ══════════════════════════════════════════════════════════
# SLIDE 4 — THE ANSWER: HSIL Hackathon (The Reveal)
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARKER)
rect(s, Inches(0), Inches(0), Inches(0.06), Inches(7.5), GOLD)

tb(s, Inches(0.5), Inches(0.5), Inches(12.3), Inches(0.5),
   "THE ANSWER", sz=13, clr=GOLD, bold=True, align=PP_ALIGN.CENTER)

tb(s, Inches(0.5), Inches(1.3), Inches(12.3), Inches(1.2),
   "HSIL Hackathon", sz=52, clr=WHITE, bold=True, align=PP_ALIGN.CENTER)

tb(s, Inches(0.5), Inches(2.5), Inches(12.3), Inches(0.6),
   "The world's largest health innovation hackathon", sz=22, clr=TEAL, align=PP_ALIGN.CENTER)

accent_bar(s, Inches(5.7), Inches(3.4), Inches(1.9), GOLD)

# Big stats row
big_stats = [
    ("7th", "Edition"),
    ("30+", "Cities"),
    ("50+", "Countries"),
    ("5,000+", "Participants"),
]

for i, (num, label) in enumerate(big_stats):
    x = Inches(1.2) + i * Inches(3.0)
    y = Inches(4.0)

    tb(s, x, y, Inches(2.5), Inches(1.0),
       num, sz=48, clr=GOLD, bold=True, align=PP_ALIGN.CENTER)
    tb(s, x, y + Inches(1.0), Inches(2.5), Inches(0.4),
       label, sz=16, clr=MED_GRAY, align=PP_ALIGN.CENTER)

# Bottom note
tb(s, Inches(0.5), Inches(6.0), Inches(12.3), Inches(0.5),
   "Organized by Harvard T.H. Chan School of Public Health — Health Systems Innovation Lab",
   sz=14, clr=MED_GRAY, align=PP_ALIGN.CENTER)

# Logo
try:
    s.shapes.add_picture(os.path.join(ASSETS, "hsil-logo.png"),
                         Inches(5.8), Inches(6.5), height=Inches(0.6))
except: pass

slide_num(s, 4)


# ══════════════════════════════════════════════════════════
# SLIDE 5 — THIS YEAR'S THEME: AI × Healthcare
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARK)
rect(s, Inches(0), Inches(0), Inches(0.06), Inches(7.5), TEAL)

tb(s, Inches(0.8), Inches(0.5), Inches(4), Inches(0.4),
   "2026 THEME", sz=12, clr=TEAL, bold=True)

tb(s, Inches(0.8), Inches(1.0), Inches(11), Inches(1.2),
   "運用 AI 打造高價值醫療體系", sz=40, clr=WHITE, bold=True)

tb(s, Inches(0.8), Inches(2.2), Inches(11), Inches(0.5),
   "Building High-Value Health Systems: Leveraging AI", sz=20, clr=TEAL)

accent_bar(s, Inches(0.8), Inches(3.0), Inches(3), GOLD)

# 8 challenge categories in grid
challenges = [
    ("EHR Data Analysis", "電子病歷數據分析"),
    ("AI Diagnostic Tools", "AI 診斷工具"),
    ("Clinical Chatbots", "臨床對話機器人"),
    ("Workforce Optimization", "醫療人力配置"),
    ("Cardiovascular Disease", "心血管疾病"),
    ("Cancer Care", "癌症照護"),
    ("Mental Health", "心理健康"),
    ("Disease Surveillance", "傳染病防治"),
]

for i, (en, zh) in enumerate(challenges):
    col = i % 4
    row = i // 4
    x = Inches(0.8) + col * Inches(3.1)
    y = Inches(3.5) + row * Inches(1.7)

    card = rr(s, x, y, Inches(2.8), Inches(1.35), CARD_DARK)

    tb(s, x + Inches(0.25), y + Inches(0.2), Inches(2.4), Inches(0.45),
       en, sz=15, clr=TEAL, bold=True)
    tb(s, x + Inches(0.25), y + Inches(0.7), Inches(2.4), Inches(0.4),
       zh, sz=13, clr=MED_GRAY)

slide_num(s, 5)


# ══════════════════════════════════════════════════════════
# SLIDE 6 — TAIWAN HUB: First Time Ever
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
light_slide_template(s)

tb(s, Inches(0.8), Inches(0.5), Inches(5), Inches(0.4),
   "TAIWAN HUB — 台灣站", sz=12, clr=CRIMSON, bold=True)

tb(s, Inches(0.8), Inches(1.0), Inches(7), Inches(1.0),
   "Taiwan's First Year", sz=42, clr=CRIMSON, bold=True)

tb(s, Inches(0.8), Inches(2.0), Inches(7), Inches(0.5),
   "台灣首次加入全球 30+ 城市同步舉辦的健康創新盛會", sz=18, clr=MED_GRAY)

accent_bar(s, Inches(0.8), Inches(2.7), Inches(2.5), TEAL)

# Key info cards — left side
info_items = [
    ("Date", "April 10–11, 2026 (Fri & Sat)"),
    ("Venue", "NTU School of Public Health 台大公衛學院"),
    ("Cost", "Completely FREE — meals & materials included"),
    ("Team", "3–5 members (solo registration OK, team up on Day 1)"),
    ("Output", "3-min pitch + 2-min Q&A (no coding required)"),
    ("Language", "Mandarin Chinese (some materials in English)"),
]

for i, (label, value) in enumerate(info_items):
    y = Inches(3.1) + i * Inches(0.68)

    tb(s, Inches(0.8), y, Inches(1.5), Inches(0.55),
       label, sz=13, clr=TEAL, bold=True)
    tb(s, Inches(2.5), y, Inches(5), Inches(0.55),
       value, sz=14, clr=DARK)

# Poster on right
try:
    s.shapes.add_picture(os.path.join(ASSETS, "hackathon-poster.png"),
                         Inches(8.3), Inches(1.0), height=Inches(5.8))
except: pass

# Co-organizers note at bottom
tb(s, Inches(0.8), Inches(7.0), Inches(6), Inches(0.3),
   "Co-organized by National Taiwan University × Harvard HSIL", sz=11, clr=MED_GRAY)

slide_num(s, 6)


# ══════════════════════════════════════════════════════════
# SLIDE 7 — THE JOURNEY: From Idea to Harvard
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARKER)
rect(s, Inches(0), Inches(0), Inches(0.06), Inches(7.5), GOLD)

tb(s, Inches(0.8), Inches(0.5), Inches(5), Inches(0.4),
   "THE JOURNEY", sz=12, clr=GOLD, bold=True)

tb(s, Inches(0.8), Inches(1.0), Inches(11), Inches(0.8),
   "From Registration to Harvard Demo Day", sz=36, clr=WHITE, bold=True)

accent_bar(s, Inches(0.8), Inches(1.9), Inches(3), GOLD)

# Pipeline steps as connected cards
steps = [
    ("1", "Register", "Now → Mar 31", "Fill out Airtable form\n線上報名", TEAL),
    ("2", "Get Accepted", "Early April", "Acceptance notice +\npre-event guide", TEAL),
    ("3", "Hack for 2 Days", "Apr 10–11", "Team up · Brainstorm\nBuild · Pitch", CRIMSON),
    ("4", "Win", "Apr 11", "Top 2 teams advance\nto Harvard track", GOLD),
    ("5", "Harvard", "June 19", "Bootcamp training +\nDemo Day at Harvard", GOLD),
]

card_w = Inches(2.2)
start_x = Inches(0.5)
y_base = Inches(2.7)

for i, (num, title, date, detail, dot_clr) in enumerate(steps):
    x = start_x + i * Inches(2.5)

    # Card
    card = rr(s, x, y_base, card_w, Inches(3.8), CARD_DARK)

    # Number circle
    circle = shape(s, MSO_SHAPE.OVAL, x + Inches(0.75), y_base + Inches(0.3), Inches(0.7), Inches(0.7), dot_clr)
    tb(s, x + Inches(0.75), y_base + Inches(0.3), Inches(0.7), Inches(0.7),
       num, sz=22, clr=WHITE, bold=True, align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)

    # Title
    tb(s, x + Inches(0.15), y_base + Inches(1.2), Inches(1.9), Inches(0.5),
       title, sz=17, clr=WHITE, bold=True, align=PP_ALIGN.CENTER)

    # Date
    tb(s, x + Inches(0.15), y_base + Inches(1.7), Inches(1.9), Inches(0.4),
       date, sz=11, clr=MED_GRAY, align=PP_ALIGN.CENTER)

    # Detail
    box = s.shapes.add_textbox(x + Inches(0.15), y_base + Inches(2.2), Inches(1.9), Inches(1.2))
    tf = box.text_frame
    tf.word_wrap = True
    for j, line in enumerate(detail.split('\n')):
        p = tf.paragraphs[0] if j == 0 else tf.add_paragraph()
        p.text = line
        p.font.size = Pt(12)
        p.font.color.rgb = DIM_WHITE
        p.font.name = "Calibri"
        p.alignment = PP_ALIGN.CENTER

    # Arrow between cards
    if i < len(steps) - 1:
        tb(s, x + card_w, y_base + Inches(1.5), Inches(0.3), Inches(0.5),
           "→", sz=20, clr=MED_GRAY, align=PP_ALIGN.CENTER)

slide_num(s, 7)


# ══════════════════════════════════════════════════════════
# SLIDE 8 — WHY YOU: Who Can Join
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
light_slide_template(s)

tb(s, Inches(0.8), Inches(0.5), Inches(5), Inches(0.4),
   "WHO CAN JOIN", sz=12, clr=CRIMSON, bold=True)

tb(s, Inches(0.8), Inches(1.0), Inches(11), Inches(0.8),
   "This Hackathon Is For Everyone", sz=40, clr=CRIMSON, bold=True)

tb(s, Inches(0.8), Inches(1.9), Inches(10), Inches(0.5),
   "跨領域團隊合作 — 不限科系背景", sz=18, clr=MED_GRAY)

accent_bar(s, Inches(0.8), Inches(2.5), Inches(2), TEAL)

# Disciplines cloud
disciplines = [
    ("Medicine 醫學", CRIMSON),
    ("Public Health 公衛", TEAL),
    ("Computer Science 資工", GOLD),
    ("Business 商管", RGBColor(0x64, 0x74, 0x8B)),
    ("Design 設計", RGBColor(0x8B, 0x5C, 0xF6)),
    ("Engineering 工程", TEAL),
    ("Law 法律", CRIMSON),
    ("Social Science 社科", GOLD),
]

for i, (name, clr) in enumerate(disciplines):
    col = i % 4
    row = i // 4
    x = Inches(0.8) + col * Inches(3.1)
    y = Inches(3.0) + row * Inches(1.2)

    card = rr(s, x, y, Inches(2.8), Inches(0.9), LIGHT_GRAY)
    tb(s, x + Inches(0.3), y + Inches(0.2), Inches(2.3), Inches(0.5),
       name, sz=16, clr=clr, bold=True, align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)

# Key eligibility points
points = [
    "All university students welcome — undergrad, master's, PhD",
    "No programming or technical background required",
    "Can register solo — teams formed on Day 1",
    "Must attend both days (April 10 & 11)",
]

y_start = Inches(5.5)
for i, point in enumerate(points):
    tb(s, Inches(1.3), y_start + i * Inches(0.45), Inches(10), Inches(0.4),
       f"→  {point}", sz=14, clr=DARK)

slide_num(s, 8)


# ══════════════════════════════════════════════════════════
# SLIDE 9 — WHY JOIN: The Value Proposition
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARK)
rect(s, Inches(0), Inches(0), Inches(0.06), Inches(7.5), TEAL)

tb(s, Inches(0.8), Inches(0.5), Inches(5), Inches(0.4),
   "WHY JOIN", sz=12, clr=TEAL, bold=True)

tb(s, Inches(0.8), Inches(1.0), Inches(11), Inches(0.8),
   "6 Reasons You Can't Miss This", sz=36, clr=WHITE, bold=True)

accent_bar(s, Inches(0.8), Inches(1.8), Inches(2.5), TEAL)

highlights = [
    ("Completely Free", "零費用 — 包含兩天午餐與活動物資", TEAL),
    ("No Coding Required", "不需要程式背景 — 只需要一個 Pitch", TEAL),
    ("Harvard Bootcamp", "前兩名進入哈佛 HSIL 培訓計畫", GOLD),
    ("Global Demo Day", "6/19 在哈佛向全球專家展示方案", GOLD),
    ("Expert Mentors", "現場導師指導 — 來自醫療、AI、商業等領域", CRIMSON),
    ("Real Impact", "解決真實的全球健康挑戰", CRIMSON),
]

for i, (en, zh, accent) in enumerate(highlights):
    col = i % 2
    row = i // 2
    x = Inches(0.8) + col * Inches(6.2)
    y = Inches(2.3) + row * Inches(1.6)

    card = rr(s, x, y, Inches(5.8), Inches(1.3), CARD_DARK)

    # Accent left edge
    rect(s, x, y + Inches(0.2), Inches(0.08), Inches(0.9), accent)

    tb(s, x + Inches(0.4), y + Inches(0.2), Inches(5), Inches(0.45),
       en, sz=18, clr=WHITE, bold=True)
    tb(s, x + Inches(0.4), y + Inches(0.7), Inches(5), Inches(0.4),
       zh, sz=14, clr=MED_GRAY)

slide_num(s, 9)


# ══════════════════════════════════════════════════════════
# SLIDE 10 — JUDGING: How Teams Are Evaluated
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
light_slide_template(s)

tb(s, Inches(0.8), Inches(0.5), Inches(5), Inches(0.4),
   "JUDGING CRITERIA", sz=12, clr=CRIMSON, bold=True)

tb(s, Inches(0.8), Inches(1.0), Inches(11), Inches(0.8),
   "How Teams Are Evaluated", sz=36, clr=CRIMSON, bold=True)

tb(s, Inches(0.8), Inches(1.8), Inches(10), Inches(0.4),
   "6 criteria  ×  5 points each  =  30 points total", sz=16, clr=MED_GRAY)

accent_bar(s, Inches(0.8), Inches(2.3), Inches(2), GOLD)

criteria = [
    ("Innovation 創新性", "Novel, creative approach", "5"),
    ("Feasibility 可行性", "Realistic implementation", "5"),
    ("Health Impact 健康影響力", "Meaningful health outcomes", "5"),
    ("Scalability 可擴展性", "Potential to scale", "5"),
    ("Presentation 簡報品質", "Clear, compelling pitch", "5"),
    ("AI Integration AI應用", "Effective use of AI", "5"),
]

for i, (name, desc, pts) in enumerate(criteria):
    col = i % 3
    row = i // 3
    x = Inches(0.8) + col * Inches(4.1)
    y = Inches(2.8) + row * Inches(2.1)

    card = rr(s, x, y, Inches(3.7), Inches(1.7), LIGHT_GRAY)

    # Score badge
    badge = rr(s, x + Inches(0.2), y + Inches(0.2), Inches(0.75), Inches(0.5), CRIMSON)
    tb(s, x + Inches(0.2), y + Inches(0.2), Inches(0.75), Inches(0.5),
       f"{pts} pts", sz=14, clr=WHITE, bold=True, align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)

    tb(s, x + Inches(1.1), y + Inches(0.2), Inches(2.4), Inches(0.5),
       name, sz=14, clr=CRIMSON, bold=True)

    tb(s, x + Inches(0.2), y + Inches(0.95), Inches(3.3), Inches(0.6),
       desc, sz=14, clr=DARK)

slide_num(s, 10)


# ══════════════════════════════════════════════════════════
# SLIDE 11 — THE ASK: Register Now
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARK)
rect(s, Inches(0), Inches(0), Inches(0.06), Inches(7.5), GOLD)

tb(s, Inches(0.5), Inches(0.8), Inches(12.3), Inches(0.4),
   "THE ASK", sz=12, clr=GOLD, bold=True, align=PP_ALIGN.CENTER)

tb(s, Inches(0.5), Inches(1.5), Inches(12.3), Inches(1.0),
   "Register by March 31, 2026", sz=48, clr=WHITE, bold=True, align=PP_ALIGN.CENTER)

accent_bar(s, Inches(5.5), Inches(2.8), Inches(2.3), GOLD)

# Key details recap
recap = [
    ("When", "April 10–11, 2026"),
    ("Where", "NTU School of Public Health"),
    ("Cost", "FREE"),
    ("Deadline", "March 31, 2026"),
]

for i, (label, value) in enumerate(recap):
    x = Inches(1.5) + i * Inches(2.8)
    y = Inches(3.4)

    card = rr(s, x, y, Inches(2.4), Inches(1.5), CARD_DARK)
    tb(s, x, y + Inches(0.3), Inches(2.4), Inches(0.4),
       label, sz=13, clr=MED_GRAY, align=PP_ALIGN.CENTER)
    tb(s, x, y + Inches(0.7), Inches(2.4), Inches(0.5),
       value, sz=17, clr=WHITE, bold=True, align=PP_ALIGN.CENTER)

# Scan / Link note
tb(s, Inches(0.5), Inches(5.4), Inches(12.3), Inches(0.5),
   "Registration:  airtable.com  (link on our website)", sz=16, clr=TEAL, align=PP_ALIGN.CENTER)

tb(s, Inches(0.5), Inches(5.9), Inches(12.3), Inches(0.5),
   "Instagram:  @hsilhackathon.taiwan", sz=15, clr=MED_GRAY, align=PP_ALIGN.CENTER)

# Urgency note
tb(s, Inches(0.5), Inches(6.5), Inches(12.3), Inches(0.5),
   "Only 30 days left.  Spots are limited.  Don't miss Taiwan's first HSIL Hackathon.",
   sz=16, clr=GOLD, align=PP_ALIGN.CENTER)

slide_num(s, 11)


# ══════════════════════════════════════════════════════════
# SLIDE 12 — CLOSING: Emotional Send-Off
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(prs.slide_layouts[6])
bg(s, DARKER)

# Side accents (matching cover)
rect(s, Inches(0), Inches(0), Inches(0.35), Inches(7.5), CRIMSON)
rect(s, Inches(0.35), Inches(0), Inches(0.08), Inches(7.5), TEAL)

# Big emotional line
tb(s, Inches(1.0), Inches(1.5), Inches(11), Inches(1.2),
   "準備好改變世界了嗎？", sz=48, clr=WHITE, bold=True)

tb(s, Inches(1.0), Inches(2.8), Inches(11), Inches(0.8),
   "The future of healthcare won't build itself.", sz=28, clr=TEAL, bold=True)

accent_bar(s, Inches(1.0), Inches(3.9), Inches(4), GOLD)

tb(s, Inches(1.0), Inches(4.4), Inches(11), Inches(0.8),
   "It needs people like you.", sz=26, clr=GOLD)

# Coordinator sign-off
tb(s, Inches(1.0), Inches(5.8), Inches(11), Inches(0.4),
   "Chuehan Kuo", sz=20, clr=WHITE, bold=True)
tb(s, Inches(1.0), Inches(6.2), Inches(11), Inches(0.4),
   "Founder & Lead Coordinator — HSIL Hackathon Taiwan Hub", sz=13, clr=MED_GRAY)

# Logos
try:
    s.shapes.add_picture(os.path.join(ASSETS, "hsil-logo.png"),
                         Inches(1.0), Inches(6.7), height=Inches(0.55))
except: pass

tb(s, Inches(4), Inches(6.9), Inches(8), Inches(0.3),
   "Thank you  ·  謝謝", sz=16, clr=MED_GRAY)

slide_num(s, 12)


# ── Save ────────────────────────────────────────────────
output = "/home/user/HSIL-Website/HSIL_Hackathon_2026_Speech.pptx"
prs.save(output)
print(f"Presentation saved: {output}")
print(f"Total slides: {TOTAL}")
