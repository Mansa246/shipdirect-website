import re

with open('/Users/mansa/.gemini/antigravity/brain/a18b32e7-f2f5-48e8-b865-59513d3711c6/ghl-shipdirect.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace massive data URLs with placeholders or empty
content = re.sub(r'url\("data:image/[^"]+"\)', 'url("")', content)
content = re.sub(r'url\("data:font/[^"]+"\)', 'url("")', content)
content = re.sub(r'src="data:image/[^"]+"', 'src=""', content)

# Remove massive style tags if they are huge, but we need Tailwind CSS! 
# Actually, the tailwind CSS might be large. Let's just check length.

with open('/Users/mansa/.gemini/antigravity/brain/a18b32e7-f2f5-48e8-b865-59513d3711c6/ghl-lightweight.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(len(content))
