//sprite animation, handles spritesheet animations, one sequence per row
function SpriteAnimation(frameSpeed, framePositionStart, frameDimensions, loop, frameCount)
{
    this.FrameDimensions = new THREE.Vector2;
    this.FramePosition = new THREE.Vector2;
    this.FrameSpeed = 0.0;
    this.SourceRectangle = new THREE.Vector4;
    this.Loop = false;
    this.FrameCount = 0;
    this.CurrentFrame = 0;
    this.FrameDuration = 0.0;
    this.FrameTimer = 0.0;
    
    this.FrameSpeed = frameSpeed;
    this.FramePosition = framePositionStart;
    this.FrameDimensions = frameDimensions;
    this.Loop = loop;
    this.FrameCount = frameCount;
    
    this.SourceRectangle.x = FramePosition.x;
    this.SourceRectangle.y = FramePosition.y;
    this.SourceRectangle.z = FrameDimensions.x;
    this.SourceRectangle.w = FrameDimensions.y;
}

SpriteAnimation.prototype.update = function(deltaTime)
{
    this.FrameTimer += deltaTime;
    //check if should increment frame
    if(this.FrameTimer >= this.FrameDuration - 1)
    {
        if(this.CurrentFrame >= this.FrameCount)
        {
            if(this.Loop)
            {
                this.CurrentFrame = 0;
            }
        }
        else
        {
            this.CurrentFrame++;
        }
        
        this.SourceRectangle.x = (this.CurrentFrame * this.FrameDimensions.x);
        this.FrameTimer %= this.FrameDuration;
    }
}