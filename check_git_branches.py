import subprocess
import json

def run_git_status():
    cwd = '/Users/mansa/.gemini/antigravity/playground/ghost-curie/shipdirect-website'
    result = subprocess.run(['git', 'branch', '-a'], cwd=cwd, capture_output=True, text=True)
    print("Branches:\n", result.stdout)
    
run_git_status()
