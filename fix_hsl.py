import re
with open('assets/css/styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to replace space separated hsl to comma separated hsl
def replacer(match):
    h, s, l = match.group(1), match.group(2), match.group(3)
    alpha = match.group(5)
    if alpha:
        return f"hsl({h}, {s}, {l}, {alpha})"
    return f"hsl({h}, {s}, {l})"

# Replace spaces and slashes with commas
# hsl(var(--hue) 26% 12%) -> hsl(var(--hue), 26%, 12%)
# hsl(var(--hue) 26% 12% / 0.5) -> hsl(var(--hue), 26%, 12%, 0.5)
# hsl(250 26% 12%) -> hsl(250, 26%, 12%)
content = re.sub(r'hsl\(\s*(var\(--hue\)|[0-9]+)\s+([0-9.]+%)\s+([0-9.]+%)\s*(/\s*([0-9.]+))?\)', replacer, content)

with open('assets/css/styles.css', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
