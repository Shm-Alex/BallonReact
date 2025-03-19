using BallonServiceContract;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InMemoryBallonService
{
    public class MyDataContext {
        public List<Balloon> Ballons { get;  private set; } = new List<Balloon>();
    }
    public class InMemoryBallonService : IBallonService
    {
        private readonly MyDataContext context;

        public InMemoryBallonService(MyDataContext context)
        {
            this.context  = context;
        }
        //public Balloon Create(int R = 0, int color = 0, string? Name = null, decimal? PressureAbs = null)
        //{
        //    var ret=new Balloon() { Id= (context.Ballons.LastOrDefault()?.Id ?? 0)+1, R = R, Collor = color, Name = Name, PressureAbs = PressureAbs ?? 0 };
        //    context.Ballons.Add( ret);
        //    return ret;
            
        //}
        public Balloon Create(Balloon b)
        {
            b.Id= (context.Ballons.LastOrDefault()?.Id ?? 0)+1;
            context.Ballons.Add(b);
            return b;
        }


            public bool Delete(int id)
        {
            var BToDelete = Get(id);
            if(BToDelete==null) return false;
            context.Ballons.Remove(BToDelete);
            return true;
        }

        public Balloon Get(int id)
        => context.Ballons.FirstOrDefault(b => b.Id == id);

        public List<Balloon> Get()
        => context.Ballons.ToList();

        public Balloon ?Update(Balloon b)
        {
            Balloon balloon = Get(b.Id);
            if (balloon != null) {
                balloon.Collor = b.Collor;
                balloon.Name= b.Name;
                balloon.PressureAbs= b.PressureAbs;
                balloon.R= b.R;
            }
            return balloon;
        }
    }
}
